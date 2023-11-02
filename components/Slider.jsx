import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/GlobalApi';

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
    useEffect(() => {
        getSliderData();
    }, [])
    return (
        <View style={{ marginTop: 10 }}>
            <FlatList data={slider} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                <View>
                    <Image source={{ uri: item.image }} 
                    style={styles.styleImage} />
                </View>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    styleImage: { width: Dimensions.get('screen').width*0.87, height: 150, borderRadius: 10, marginRight:15 }
})