import { Button, ScrollView, View } from 'react-native'
import React, { useContext } from 'react'
import Utils from '../services/Utils'
import { AuthContext } from '../services/AuthContext'
import WelcomeHeader from './WelcomeHeader'
import Searchbar from './Searchbar'
import Slider from './Slider'
import VideoCourseList from './VideoCourseList'
import CourseList from './CourseList'

const Home = ({ route }) => {
    const { userData, setUserData } = useContext(AuthContext);
    const handleLogout = () => {
        Utils.clearUserLogin();
        setUserData(null);
        route.params.setMoveToLogin(true);
    }
    return (
        <View style={{ padding: 20 }}>
            <ScrollView style={{padding: 10}}>
            <WelcomeHeader />
            <Searchbar />
            <Slider />
            
                <VideoCourseList />
                <CourseList courseType={'database'} />
                <CourseList courseType={'AI-ML'} />
                <CourseList courseType={'cloud'} />
            <Button title='Logout' onPress={() => {
                handleLogout()
            }} />
            </ScrollView>
        </View>
    )
}

export default Home