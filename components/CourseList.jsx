import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import axiosInstance from '../services/GlobalApi';
import Color from '../assets/utils/Color';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({courseType}) {
    const [textCourse, setTextCourse] = useState([]);
    const navigator = useNavigation();
    const getTextCourseList = async () =>{
        const result = (await axiosInstance.get(`/text-courses?filters[type][$eq]=${courseType}&populate=*`)).data;
        const textCoursesJSON = result.data.map((item)=>({
            id: item.id,
            name: item.attributes.name,
            desc: item.attributes.description,
            courses: item.attributes.courses,
            image: courseType === 'database' ? 'https://res.cloudinary.com/di4vcu2eg/image/upload/v1699760476/assets/vmgldwvq0xnj5x5y5mxs.png' : courseType === 'cloud' ? 'https://res.cloudinary.com/di4vcu2eg/image/upload/v1699760476/assets/sbpl7rgkyohuwehx4dv7.png' : 'https://res.cloudinary.com/di4vcu2eg/image/upload/v1699760476/assets/jdc424sjxckuohv4nx4r.png'
        }))
        setTextCourse(textCoursesJSON);
    }
    const navigateToDetails = (courseDetails)=>{
        navigator.navigate('course-detail',{courseData:courseDetails, courseType:'text'});
    }
    useEffect(()=>{
        getTextCourseList();
    },[])
  return (
    <View style={{marginTop:15}}>
      <Text style={styles.headerText}>{courseType} Courses</Text>
      <FlatList data={textCourse} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.courseContentStyle} onPress={()=>{navigateToDetails(item)}}>
                <Image source={{uri: item.image}} style={styles.imgStyle} />
                <View style={{padding: 10}}> 
                <Text style={styles.courseTitleText}>{item.name}</Text>
                <Text style={styles.moudleCountText}>{item.courses.length} Modules</Text>
                </View>
            </TouchableOpacity>   
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
        textTransform: 'capitalize',
    },
    courseContentStyle:{
        backgroundColor: Color.white,
        marginRight: 10,
        borderRadius: 10,
    },
    imgStyle:{
        width: 130,
        height: 120,
        borderRadius: 10,
    },
    moudleCountText:{
        color: Color.gray,
        fontWeight: '300',
    },
    courseTitleText:{
        fontWeight: 'bold',
        fontSize: 15,
    }
})