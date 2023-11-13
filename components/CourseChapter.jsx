import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
export default function CourseChapter() {
    const navigator = useNavigation();
    const param = useRoute().params;
    const [content, setContent] = useState([]);
    useEffect(() => {
        setContent(param.courseContent);
    }, []);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
                <Ionicons name="ios-arrow-back-sharp" size={27} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>{content.name}</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.textContent}>{content.content}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    scrollView: {
        flex: 1,
        marginTop: 10,
    },
    textContent: {
        flexGrow: 1,
    },
})