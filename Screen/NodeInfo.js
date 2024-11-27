import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../Config/data.json';


const NodeInfo = ({ route }) => {
  const { nodeNumber } = route.params;

  return (
    <View style={styles.container}>

      {/* Node Name */}
      <View style={styles.nodeNameContainer}>
        <View style={styles.nodeCircle}>
          <Text style={styles.nodeCircleText}>Node {nodeNumber+1}</Text>
        </View>
      </View>

      {/* Information Cards */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Vibration Level</Text>
          </View>
          <Text style={[
            styles.infoValue, 
            data.nodes[nodeNumber].vibration_level > 2 && { color: 'red' }
          ]}>
            {data.nodes[nodeNumber].vibration_level} Hz
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Sound Level</Text>
          </View>
          <Text style={[
            styles.infoValue, 
            data.nodes[nodeNumber].sound_level > 10 && { color: 'red' }
          ]}>
            {data.nodes[nodeNumber].sound_level} dB
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Daily Water Usage</Text>
          </View>
          <Text style={[
            styles.infoValue, 
            data.nodes[nodeNumber].water_usage.per_day > 100 && { color: 'red' }
          ]}>
            {data.nodes[nodeNumber].water_usage.per_day} L
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Leak Alert</Text>
          </View>
          <Text style={[
            styles.infoValue, 
            data.nodes[nodeNumber].leak_detected && { color: 'red' }
          ]}>
            {data.nodes[nodeNumber].leak_detected ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: '#002B5C',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nodeNameContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  nodeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#002B5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeCircleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoValue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NodeInfo;
