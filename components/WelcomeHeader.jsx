import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../services/AuthContext'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeHeader() {
    const { userData, setUserData } = useContext(AuthContext);
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Text>Hello,</Text>
                <Text style={styles.usernameText}>{userData?.given_name}</Text>
            </View>
            <TouchableOpacity onPress={()=>{
                navigator.navigate('profile');
            }}>
            <Image source={{ uri: userData?.picture }} style={styles.userProfileimg} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    usernameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userProfileimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
})