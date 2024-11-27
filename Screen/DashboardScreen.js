import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatisticsGraphWeek } from './StatisticsScreen';
import data from '../Config/data.json';
import NodeInfo from './NodeInfo';

// Composant Dashboard
export default function DashboardScreen({ navigation }) {

  const allLeaksDetected = data.nodes.every(node => !node.leak_detected);

  return (
    <View style={styles.container}>
      {/* Nodes */}
      <View style={styles.nodeContainer}>
        <TouchableOpacity
          style={[
            styles.node,
            { backgroundColor: data.nodes[0].leak_detected ? 'red' : 'green' },
          ]}
          onPress={() => navigation.navigate('NodeInfo1')}
        >
          <Text style={styles.nodeText}>Node 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.node,
            { backgroundColor: data.nodes[1].leak_detected ? 'red' : 'green' },
          ]}
          onPress={() => navigation.navigate('NodeInfo2')}
        >
          <Text style={styles.nodeText}>Node 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.node,
            { backgroundColor: data.nodes[2].leak_detected ? 'red' : 'green' },
          ]}
          onPress={() => navigation.navigate('NodeInfo3')}
        >
          <Text style={styles.nodeText}>Node 3</Text>
        </TouchableOpacity>
      </View>

      {/* Leak Detection */}
      <Text style={[styles.leakText, { color: allLeaksDetected ? 'green' : 'red' }]}>
        {allLeaksDetected ? 'No Leak Detected' : 'Leak Detected'}
      </Text>
      
      {/* Statistics Graph */}
      <View style={{ marginTop: 200 }}>
        <StatisticsGraphWeek enableNavigation={false} />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
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
  nodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    width: '90%',
  },
  node: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  leakText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
