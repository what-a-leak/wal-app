import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import data from '../Config/data_init.json';

// Component for Node History Screen
export default function NodeHistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Map Container */}
      <View style={styles.mapContainer}>
        {/* Network lines across the entire screen */}
        <View style={[styles.line, styles.lineHorizontal, { top: '10%' }]} />
        <View style={[styles.line, styles.lineVertical, { left: '25%' }]} />
        <View style={[styles.line, styles.lineDiagonal, { top: '30%' }]} />
        <View style={[styles.line, styles.lineHorizontal, { top: '50%' }]} />
        <View style={[styles.line, styles.lineDiagonalReversed, { top: '70%' }]} />

        {/* Node Positions */}
          <View style={[styles.node, { top: '7%', left: '70%', backgroundColor: data.nodes[0].leak_detected ? 'red' : '#1A237E' }]}>
            <Text style={styles.nodeText}>1</Text>
          </View>
          <View style={[styles.node, { top: '47%', left: '50%', backgroundColor: data.nodes[1].leak_detected ? 'red' : '#1A237E' }]}>
            <Text style={styles.nodeText}>2</Text>
          </View>
          <View style={[styles.node, { top: '82%', left: '20%', backgroundColor: data.nodes[2].leak_detected ? 'red' : '#1A237E' }]}>
            <Text style={styles.nodeText}>3</Text>
          </View>
              </View>

              {/* Buttons for each Node */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.nodeButton, { backgroundColor: data.nodes[0].leak_detected ? 'red' : '#1A237E' }]}onPress={() => navigation.navigate('NodeInfo1')}>
          <Text style={styles.buttonText}>Node 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nodeButton, { backgroundColor: data.nodes[1].leak_detected ? 'red' : '#1A237E' }]}onPress={() => navigation.navigate('NodeInfo2')}>
          <Text style={styles.buttonText}>Node 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nodeButton, { backgroundColor: data.nodes[2].leak_detected ? 'red' : '#1A237E' }]}onPress={() => navigation.navigate('NodeInfo3')}>
          <Text style={styles.buttonText}>Node 3</Text>
        </TouchableOpacity>
      </View>
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
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  line: {
    backgroundColor: '#4FC3F7',
    position: 'absolute',
  },
  lineHorizontal: {
    width: '100%',
    height: 5,
  },
  lineVertical: {
    height: '100%',
    width: 5,
  },
  lineDiagonal: {
    width: '140%', 
    height: 5,
    transform: [{ rotate: '45deg' }],
  },
  lineDiagonalReversed: {
    width: '140%', 
    height: 5,
    transform: [{ rotate: '-45deg' }],
  },
  node: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  nodeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  nodeButton: {
    backgroundColor: '#1A237E',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
