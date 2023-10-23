import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Color from '../assets/utils/Color';

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.iconStyle} name="ios-search-outline" size={24} color={Color.gray} />
      <TextInput placeholder='Search' />
    </View>
  )
}

const styles = StyleSheet.create({
    iconStyle:{
        marginRight: 10
    },
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:Color.white,
        padding: 12,
        borderRadius: 12,
        elevation: 3,
        marginTop: 10,
        alignContent: 'center'
    }
})