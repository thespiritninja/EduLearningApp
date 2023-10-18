import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './components/Onboarding';
import Login from './components/Login';
import Constants from 'expo-constants';
export default function App() {
  const [moveToLogin, setMoveToLogin] = useState(null);

  return (
    <View style={styles.container}>
      {!moveToLogin ? 
        <OnboardingScreen setMoveToLogin={setMoveToLogin} /> : 
        <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
});
