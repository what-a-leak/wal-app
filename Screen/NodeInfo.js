import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../config/data.json';

const NodeInfo = ({ route }) => {
  const { nodeNumber } = route.params;
  const node = data.find(node => node.NodeID === nodeNumber + 1 );

  // Fonction pour formater le timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      {/* Node Name */}
      <View style={styles.nodeNameContainer}>
        <View style={styles.nodeCircle}>
          <Text style={styles.nodeCircleText}>Node {nodeNumber + 1}</Text>
        </View>
      </View>

      {/* Information Cards */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Last Update</Text>
          </View>
          <Text style={styles.infoValue}>
            {formatTimestamp(node.TimeStamp)}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Battery Level</Text>
          </View>
          <Text style={styles.infoValue}>
            {node.Batterie} %
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Sensor Measure</Text>
          </View>
          <Text style={styles.infoValue}>
            {node.MesureCapteur}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Leak Alert</Text>
          </View>
          <Text style={[
            styles.infoValue, 
            node.Status === 1 && { color: 'red' }
          ]}>
            {node.Status === 1 ? 'Leak Detected' : 'No Leak'}
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
    padding: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  infoButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    width: '45%',
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
    width: '45%',
    textAlign: 'right',
  },
});

export default NodeInfo;