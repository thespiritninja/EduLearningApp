import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
export default function ProgressBar({progressVal}) {
  return (
    <View>
      <Progress.Bar progress={progressVal} width={Dimensions.get('screen').width*.85} />
    </View>
  )
}

const styles = StyleSheet.create({})