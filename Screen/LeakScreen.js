import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function LeakHistoryScreen() {
  return (
    <View style={styles.container}>
      {/* Liste des fuites d'eau */}
      <ScrollView contentContainerStyle={styles.historyContainer}>
        <View style={[styles.leakContainer, { backgroundColor: '#f44336' }]}>
          <Text style={styles.dateText}>14/10/2024</Text>
          <Text style={styles.statusText}>Leak Detected</Text>
          <Text style={styles.infoText}>Water consumption: 22L/min</Text>
          <Text style={styles.infoText}>Vibration Level: 35 Hz</Text>
          <Text style={styles.infoText}>Sound Level: 372 dB</Text>
          <Text style={styles.infoText}>Location: 8m</Text>
        </View>

        <View style={[styles.leakContainer, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.dateText}>20/09/2024</Text>
          <Text style={styles.statusText}>Leak Detected</Text>
          <Text style={styles.statusResolvedText}>Corrected</Text>
          <Text style={styles.infoText}>Water consumption: 760L</Text>
          <Text style={styles.infoText}>Vibration Level: 32 Hz</Text>
          <Text style={styles.infoText}>Sound Level: 732 dB</Text>
          <Text style={styles.infoText}>Location: 20m</Text>
        </View>
      </ScrollView>

      {/* Bouton de contact */}
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact a Professional</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  historyContainer: {
    alignItems: 'center',
  },
  leakContainer: {
    width: '90%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  statusResolvedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  contactButton: {
    backgroundColor: '#6A0DAB',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

