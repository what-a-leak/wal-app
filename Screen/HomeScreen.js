import React from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleLogin = () => {
        // Navigate to the main app screen
        navigation.navigate('DashboardScreen');
    };

    const handleCloseApp = () => {
        Alert.alert(
            'Exit App',
            'Are you sure you want to close the app?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'OK', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={[styles.logo, { borderRadius: 20 }]} />
            <Text style={styles.title}>Welcome to the App</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCloseApp}>
                <Text style={styles.buttonText}>Close App</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a0dad',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeScreen;