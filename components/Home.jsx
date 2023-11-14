import { Button, ScrollView, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../services/AuthContext'
import WelcomeHeader from './WelcomeHeader'
import Slider from './Slider'
import VideoCourseList from './VideoCourseList'
import CourseList from './CourseList'

const Home = () => {
    const { userData, setUserData } = useContext(AuthContext);
    return (
        <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
            <ScrollView style={{ padding: 10 }}>
                <WelcomeHeader />
                <Slider />
                <VideoCourseList />
                <CourseList courseType={'database'} />
                <CourseList courseType={'AI-ML'} />
                <CourseList courseType={'cloud'} />
            </ScrollView>
        </View>
    )
}

export default Home