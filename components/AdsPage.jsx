import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
export default function AdsPage() {
    const navigator = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
                <Ionicons name="ios-arrow-back-sharp" size={27} color="black" />
            </TouchableOpacity>
            <View style={styles.adsContainer}>
                <Text style={styles.adsText}>This was my stretch goal, to just display ads about the slider item clicked</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    adsContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    adsText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})