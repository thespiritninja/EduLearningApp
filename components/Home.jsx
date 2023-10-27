import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Utils from '../services/Utils'
import { AuthContext } from '../services/AuthContext'
import WelcomeHeader from './WelcomeHeader'
import Searchbar from './Searchbar'
import axiosInstance from '../services/GlobalApi'

const Home = ({ setMoveToLogin }) => {
    const { userData, setUserData } = useContext(AuthContext);
    
    const handleLogout = () => {
        Utils.clearUserLogin();
        setUserData(null);
        setMoveToLogin(true);
    }
    const getSliderData = async () => {
        const result = (await axiosInstance.get('/sliders?populate=*')).data;
        console.log(`Result = ${JSON.stringify(result)}`);
    }
    useEffect(()=>{
        getSliderData();
    },[])
    return (
        <View style={{padding:20}}>
            <WelcomeHeader />
            <Searchbar />
            <Button title='Logout' onPress={() => {
                handleLogout()
            }} />
        </View>
    )
}

export default Home