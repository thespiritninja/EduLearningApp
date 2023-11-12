import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

export default function CourseDetails() {
    const param = useRoute().params;
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        console.log(param.courseData);
        setCourse(param.courseData);
    },[])
  return (
    <View>
      <Text>CourseDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})