import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import CourseDetails from './CourseDetails';
import CourseChapter from './CourseChapter';
const Stack = createNativeStackNavigator();
export default function HomeNavigation({setMoveToLogin}) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home} initialParams={{setMoveToLogin: setMoveToLogin}}></Stack.Screen>
        <Stack.Screen name='course-detail' component={CourseDetails}></Stack.Screen>
        <Stack.Screen name='course-chapter' component={CourseChapter}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})