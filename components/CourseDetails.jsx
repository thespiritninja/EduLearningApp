import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Color from '../assets/utils/Color';
import CourseContent from './CourseContent';
export default function CourseDetails() {
    const param = useRoute().params;
    const [course, setCourse] = useState([]);
    const navigator = useNavigation();
    useEffect(()=>{
        setCourse(param.courseData);
    },[])
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigator.goBack()}>
        <Ionicons name="ios-arrow-back-sharp" size={27} color="black" />
        </TouchableOpacity>
      <View style={{marginBottom: 30}}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={{color: Color.gray}}>Courtsey: Medium</Text>
        <Image source={{uri: course.image}} style={styles.imgStyle} />
        <Text style={styles.aboutStyle}>About Course</Text>
        <Text numberOfLines={5} style={{color: Color.gray}}>{course.desc}</Text>
        <CourseContent course={course} courseType={param.courseType}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 40,
    },
    courseName:{
        fontSize:20,
        fontWeight: 'bold',
    },
    imgStyle:{
        height:200,
        marginTop: 10,
        borderRadius: 10,
    },
    aboutStyle:{
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})