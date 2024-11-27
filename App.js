import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Screen/Navigation';
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './Screen/WelcomeScreen';
import HomeScreen from './Screen/HomeScreen';


export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000); // Show WelcomeScreen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return <Navigation />;
}

