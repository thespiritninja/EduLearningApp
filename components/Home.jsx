import { Button, View } from 'react-native'
import React, { useContext } from 'react'
import Utils from '../services/Utils'
import { AuthContext } from '../services/AuthContext'
import WelcomeHeader from './WelcomeHeader'
import Searchbar from './Searchbar'
import Slider from './Slider'
import VideoCourseList from './VideoCourseList'

const Home = ({ setMoveToLogin }) => {
    const { userData, setUserData } = useContext(AuthContext);
    
    const handleLogout = () => {
        Utils.clearUserLogin();
        setUserData(null);
        setMoveToLogin(true);
    }
    return (
        <View style={{padding:20}}>
            <WelcomeHeader />
            <Searchbar />
            <Slider />
            <VideoCourseList />
            <Button title='Logout' onPress={() => {
                handleLogout()
            }} />
        </View>
    )
}

export default Home