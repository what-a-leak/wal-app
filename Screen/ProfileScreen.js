import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, Image } from 'react-native';

const ProfileScreen = () => {
    const [name, setName] = useState('Cédric');
    const [surname, setSurname] = useState('Chanfreau');
    const [email, setEmail] = useState('cedric.chanfreau@gmail.com');
    const [profileImage, setProfileImage] = useState(require('../assets/profile.jpg'));
    const [age, setAge] = useState(22);
    const [totalWaterConsumption, setTotalWaterConsumption] = useState(10978);
    const [waterSaved, setWaterSaved] = useState(1877);
    const [moneySaved, setMoneySaved] = useState(267);
    const [leakNumber, setLeakNumber] = useState(2);

    return (

    <View style={styles.container}>

      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.verticallySpaced}>
        <Text style={styles.titlename}>{surname} {name}</Text>
        <Text style={styles.titlename}>{age} ans</Text>
      </View>

      <View style={styles.bandeau}></View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Water Consumption</Text>
          <Text style={styles.cardValue}>{totalWaterConsumption} L</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Water Saved </Text>
          <Text style={styles.cardValue}>{waterSaved} L</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Money Saved</Text>
          <Text style={styles.cardValue}>{moneySaved} $</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Leak Number</Text>
          <Text style={styles.cardValue}>{leakNumber}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    titlename:{
        color: '#472d2d',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    bandeau: {
        height: 3,
        backgroundColor: 'black',
        marginVertical: 10,
      },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      blockInfoStat: {
        flex: 1,
        backgroundColor: 'lightgray',
        height: 150,
        marginHorizontal: 5,
        borderRadius: 15,
      },
      cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
      },
      card: {
        backgroundColor: '#80d8ff',
        width: '45%',
        height: '40%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
      },
      cardTitle: {
        fontSize: 20,
        color: '#333',
      },
      cardValue: {
        fontSize: 30,
        color: '#3F51B5',
        fontWeight: 'bold',
      },
});

export default ProfileScreen;
