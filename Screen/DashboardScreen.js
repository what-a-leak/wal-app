import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatisticsGraphWeek } from './StatisticsScreen';

// Composant Dashboard
export default function DashboardScreen() {
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

  return (
    <View style={styles.container}>
      {/* Cartes d'informations */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vibration Level</Text>
          <Text style={styles.cardValue}>0.36 Hz</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sound Level</Text>
          <Text style={styles.cardValue}>20.01 dB</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Water Usage</Text>
          <Text style={styles.cardValue}>300L tdy</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Leak Alert</Text>
          <Text style={styles.cardValue}>NO</Text>
        </View>
      </View>
      <StatisticsGraphWeek enableNavigation={false} />
    </View>
  );
}
function getCurrentWeek() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    top : 20,
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
    height: '40%', // Augmente la hauteur des cartes
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
    color: 'green',
    fontWeight: 'bold',
  },
});
