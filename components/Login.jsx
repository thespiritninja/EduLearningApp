import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Color from '../assets/utils/Color'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { CLIENT_ID, IOS_ID } from '@env';
import { AuthContext } from '../services/AuthContext';
import Utils from '../services/Utils';


export default Login = () => {
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const {userData, setUserData} = useContext(AuthContext);
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: process.env.CLIENT_ID,
        iosClientId: process.env.IOS_ID
    })
    useEffect(() => {
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken);
            getUserInfo();
        }
    }, [response])

    const getUserInfo = async () => {
        try {
            const resp = await fetch("https://www.googleapis.com/userinfo/v2/me", { headers: { Authorization: `Bearer ${response.authentication.accessToken}` } });
            const user = await resp.json();
            setUserInfo(user);
            setUserData(user);
            await Utils.setUserAuth(user);
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={{ alignContent: 'center', justifyContent: 'space-evenly', marginTop: 'auto' }}>
            <Image source={require('../assets/images/login-illustration.png')} style={styles.imageContainer} />
            <View style={styles.container}>
                <Text style={styles.greetingTexts}>YouGots2Code!</Text>
                <Text style={styles.subText}>Login/Signup</Text>
                <TouchableOpacity style={styles.button} onPress={() => { promptAsync() }}>
                    <Ionicons name='logo-google' size={25} color='black' style={{ marginRight: 5 }} />
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>Login with Google!</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Ionicons name='logo-linkedin' size={25} color='black' style={{marginRight: 5}}/>
                            <Text style={{textAlign:'center', marginTop: 5}}>Login with LinkedIn!</Text>
                    </TouchableOpacity> */}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    subText: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 20,
    },
    button: {
        backgroundColor: Color.primary,
        padding: 30,
        margin: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

    },
    imageContainer: {
        maxHeight: 250,
        maxWidth: 250,
        marginLeft: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        paddingTop: 30,
        marginTop: -20,
        backgroundColor: 'skyblue',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    greetingTexts: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})