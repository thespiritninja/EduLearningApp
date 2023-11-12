import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './components/Onboarding';
import Login from './components/Login';
import { AuthContext } from './services/AuthContext';
import Home from './components/Home';
import Utils from './services/Utils';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './components/HomeNavigation';
export default function App() {
  const [moveToLogin, setMoveToLogin] = useState(null);
  const [userData, setUserData] = useState();
  useEffect(() => {
    Utils.getUserAuth().then(res => {
      if (res) {
        setUserData(res);
        setMoveToLogin(true);
      }
      else {
        setUserData(null);
      }
    })
  }, [])
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
        <View style={styles.container}>
          {!moveToLogin ?
            <OnboardingScreen setMoveToLogin={setMoveToLogin} /> :
            <>{userData ? (
              <NavigationContainer>
                <HomeNavigation setMoveToLogin={setMoveToLogin} />
              </NavigationContainer>
            // <Home setMoveToLogin={setMoveToLogin} />
            ) 
            : (<Login />)}</>
          }
        </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
});
