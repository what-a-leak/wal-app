import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={[styles.logo, { borderRadius: 100 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6A0DAB',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default WelcomeScreen;