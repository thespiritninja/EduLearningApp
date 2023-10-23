import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Utils from '../services/Utils'
import { AuthContext } from '../services/AuthContext'
import WelcomeHeader from './WelcomeHeader'
import Searchbar from './Searchbar'

const Home = ({ setMoveToLogin }) => {
    const { userData, setUserData } = useContext(AuthContext);
    const handleLogout = () => {
        Utils.clearUserLogin();
        setUserData(null);
        setMoveToLogin(true);
    }
    return (
        <View style={{padding:20}}>
            {/* <Button title='Logout' onPress={() => {
                handleLogout()
            }} /> */}
            <WelcomeHeader />
            <Searchbar />
        </View>
    )
}

export default Home