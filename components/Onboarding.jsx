import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingScreen = ({ setMoveToLogin }) => {
  const slides = [
    {
      title: 'Welcome to YouGots2Code!',
      text: 'Discover amazing courses to learn how to code!',
      image: require('../assets/images/onboarding1-illustration.png'),
    },
    {
      title: 'Quick Learning',
      text: 'Easy Learning in your pockets',
      image: require('../assets/images/onboarding2-illustration.png'), // Use a different image for the second slide
    },
    {
      title: 'Get Started',
      text: 'Start your journey with us now!',
      image: require('../assets/images/login-illustration.png'),
    },
  ];

  const handleGetStarted = () => {
    setMoveToLogin(true);
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      {slides.map((slide, index) => (
        <View style={styles.slide} key={index}>
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.text}>{slide.text}</Text>
          {index === 2 && ( 
            <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    color: 0x428df5,
  },
  getStartedButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
