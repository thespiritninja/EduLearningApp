import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../assets/utils/Color'
import { Ionicons } from '@expo/vector-icons';
export default function CourseContent({course}) {
  return (
    <View style={{marginTop:10}}>
      <Text style={styles.heading}>CourseContent</Text>
      <FlatList 
      style={{marginTop:11}}
      data={course?.courses}
      renderItem={({item, index})=>(
        <View style={styles.moduleTile}>
            <Text style={styles.moduleNumber}>{index+1}</Text>
            <Text style={styles.moduleName}>{item.name}</Text>
            <Ionicons name="ios-play-circle-sharp" size={35} style={styles.playIcon} color={Color.primary} />
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    moduleTile:{
        display: 'flex',
        flexDirection:'row',
        backgroundColor: Color.white,
        marginBottom: 5,
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
    moduleNumber:{
        fontWeight: 'bold',
        fontSize: 20,
        color: Color.gray,
        marginRight: 20
    },
    moduleName:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    playIcon:{
        position: 'absolute',
        right:10,
    }
})