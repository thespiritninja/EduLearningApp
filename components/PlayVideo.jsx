import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import Color from '../assets/utils/Color';
import YoutubePlayer from "react-native-youtube-iframe";

export default function PlayVideo() {
    const navigator = useNavigation();
    const param = useRoute().params;
    const [content, setContent] = useState([]);
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state)=>{
        if (state === "ended"){
            setPlaying(false);
            Alert.alert('Module Completed');
        }
    },[]);
    useEffect(() => {
        setContent(param.courseContent);
        console.log(param.courseContent.url)
    }, []);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
                <Ionicons name="ios-arrow-back-sharp" size={27} color="black" />
            </TouchableOpacity>
            {content && <View>
                <Text style={styles.heading}>{content.name}</Text>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={content.url}
                    onChangeState={onStateChange} />
                <Text style={styles.heading}>Description</Text>
                <Text style={styles.desc}>{content.description}</Text>

            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    heading:{
        marginBottom: 10,
        fontSize:20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    descHeader:{
        fontWeight: 'bold',
        fontSize:10,
        marginBottom: 10,
    },
    desc:{
        lineHeight: 20,
        color: Color.gray,
    }
})