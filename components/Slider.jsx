import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/GlobalApi';
import { useNavigation } from '@react-navigation/native';

export default function Slider() {
    const [slider, setSlider] = useState([]);
    const getSliderData = async () => {
        const result = (await axiosInstance.get('/sliders?populate=*')).data;
        const slidersJSON = result.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            image: `https://shark-app-fxz4g.ondigitalocean.app${item.attributes.image.data.attributes.url}`
        }))
        setSlider(slidersJSON);
    }
    const navigator = useNavigation();
    useEffect(() => {
        getSliderData();
    }, [])
    return (
        <View style={{ marginTop: 10 }}>
            <FlatList data={slider} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{navigator.navigate('ads')}}>
                    <Image source={{ uri: item.image }} 
                    style={styles.styleImage} />
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    styleImage: { width: Dimensions.get('screen').width*0.87, height: 150, borderRadius: 10, marginRight:15 }
})