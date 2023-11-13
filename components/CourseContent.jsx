import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import Color from '../assets/utils/Color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function CourseContent({course}) {
    const navigator = useNavigation();
    const navigateToChapter = (content) => {
        navigator.navigate('course-chapter',{courseContent: content});
    }
  return (
    <View style={{marginTop:10}}>
      <Text style={styles.heading}>Course Content</Text>
      <FlatList 
      style={{marginTop:11}}
      data={course?.courses}
      contentContainerStyle={{paddingBottom: 20}}
      renderItem={({item, index})=>(
        <TouchableOpacity style={styles.moduleTile} onPress={()=>{navigateToChapter(item)}}>
            <Text style={styles.moduleNumber}>{index+1}</Text>
            <Text style={styles.moduleName}>{item.name}</Text>
            <Ionicons name="ios-play-circle-sharp" size={35} style={styles.playIcon} color={Color.primary} />
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    moduleTile: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Color.white,
        marginBottom: 5,
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
    moduleNumber: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Color.gray,
        marginRight: 20
    },
    moduleName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    playIcon: {
        position: 'absolute',
        right: 10,
    }
});