import { StyleSheet, Text, View,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/GlobalApi';
import { useNavigation } from '@react-navigation/native';

export default function VideoCourseList() {
    const [videoCourses, setVideoCourses] = useState([]);
    const navigator = useNavigation();
    const getVideoCourseList = async () =>{
        const result = (await axiosInstance.get('/video-courses?populate=*')).data;
        const videCoursesJSON = result.data.map((item)=>({
            id: item.id,
            name: item.attributes.name,
            desc: item.attributes.description,
            courses: item.attributes.courses,
            image: `https://shark-app-fxz4g.ondigitalocean.app${item.attributes.image.data.attributes.url}`
        }))
        setVideoCourses(videCoursesJSON);
    }
    const navigateToDetails = (courseDetails)=>{
        navigator.navigate('course-detail',{courseData:courseDetails, courseType:'video'});
    }
    useEffect(()=>{
        getVideoCourseList();
    },[])
    return (
        <View style={{ marginTop: 15 }}>
            <Text style={styles.styleHeading}>Video Courses: </Text>
            <FlatList data={videoCourses} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{navigateToDetails(item)}}>
                    <Image source={{ uri: item.image }} 
                    style={styles.styleImage} />
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    styleImage: {
        width: 180,
        height: 100,
        marginRight: 10,
        borderRadius: 10
    },
    styleHeading:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
})