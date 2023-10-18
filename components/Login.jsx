import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import {Ionicons} from '@expo/vector-icons'
import Color from '../assets/utils/Color'

export default Login = () => {
        return (
            <View style={{alignContent: 'center'}}>
                <Image source={require('../assets/images/login-illustration.png')} style={styles.imageContainer} />
                <View style={styles.container}>
                    <Text style={styles.greetingTexts}>YouGots2Code!</Text>
                    <Text style={styles.subText}>Login/Signup</Text>
                    <View style={styles.button}>
                        <Ionicons name='logo-google' size={25} color='black' style={{marginRight: 5}}/>
                            <Text style={{textAlign:'center', marginTop: 5}}>Login with Google!</Text>
                    </View>
                    <View style={styles.button}>
                        <Ionicons name='logo-linkedin' size={25} color='black' style={{marginRight: 5}}/>
                            <Text style={{textAlign:'center', marginTop: 5}}>Login with LinkedIn!</Text>
                    </View>
                </View>
            </View>
        )
    
}

const styles = StyleSheet.create({
    subText:{
        textAlign: 'center',
        marginTop: 80,
        fontSize:20,
    },
    button:{
        backgroundColor:Color.primary,
        padding: 30,
        margin:15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        
    },
    imageContainer: {
        maxHeight: 250,
        maxWidth: 250,
        marginLeft:50,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container:{
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