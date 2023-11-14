import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import CourseDetails from './CourseDetails';
import CourseChapter from './CourseChapter';
import PlayVideo from './PlayVideo';
import Profile from './Profile';
const Stack = createNativeStackNavigator();
export default function HomeNavigation({setMoveToLogin}) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home} ></Stack.Screen>
        <Stack.Screen name='course-detail' component={CourseDetails}></Stack.Screen>
        <Stack.Screen name='course-chapter' component={CourseChapter}></Stack.Screen>
        <Stack.Screen name='play-video' component={PlayVideo}></Stack.Screen>
        <Stack.Screen name='profile' component={Profile} initialParams={{setMoveToLogin: setMoveToLogin}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})