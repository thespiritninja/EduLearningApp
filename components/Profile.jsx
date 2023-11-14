import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Utils from '../services/Utils'
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../services/AuthContext';
export default function Profile({route}) {
    const navigator = useNavigation();
    const { userData, setUserData } = useContext(AuthContext);
    const handleLogout = () => {
        Utils.clearUserLogin();
        setUserData(null);
        route.params.setMoveToLogin(true);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
                <Ionicons name="ios-arrow-back-sharp" size={27} color="black" />
            </TouchableOpacity>
            <Text style={styles.usernameText}>Your Profile: </Text>
            <View style={styles.detailsContainer}>
                <Image source={{ uri: userData?.picture }} style={styles.userProfileimg} />
                <Text style={styles.usernameText}>Hi, {userData?.given_name}</Text>
                <Text style={styles.detailText}>Name: {userData?.name}</Text>
                <Text style={styles.detailText}>Email: {userData?.email}</Text>
                <Text style={styles.detailText}>Verified?: {userData?.verified_email.toString()}</Text>
                <Button title='Logout' onPress={() => {
                handleLogout()
            }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    usernameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailsContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    userProfileimg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 20, 
    },
    detailText: {
        marginVertical: 5, 
    }
});
