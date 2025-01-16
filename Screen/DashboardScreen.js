import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatisticsGraphWeek } from './StatisticsScreen';
import data from '../config/data.json';
import GetBattery from './GetBattery';

export default function DashboardScreen({ navigation }) {
    const allLeaksDetected = data.every(node => node.Status === 0);

    return (
        <View style={styles.container}>
            {/* Nodes */}
            <View style={styles.nodeContainer}>
                {data.map((node, index) => (
                    <View key={index} style={styles.nodeWrapper}>
                        <TouchableOpacity
                            style={[
                                styles.node,
                                { backgroundColor: node.Status === 1 ? 'red' : '#45a049' },
                            ]}
                            onPress={() => navigation.navigate(`NodeInfo${index + 1}`)}
                        >
                            <Text style={styles.nodeText}>Node {index + 1}</Text>
                        </TouchableOpacity>
                        <GetBattery nodeNumber={index} />
                    </View>
                ))}
            </View>
            {/* Leak Detection */}
      <Text style={[styles.leakText, { color: allLeaksDetected ? 'green' : 'red' }]}>
        {allLeaksDetected ? 'No Leak Detected' : 'Leak Detected'}
      </Text>
      
      {/* Statistics Graph */}
      <View style={{ marginTop: 150 }}>
        <StatisticsGraphWeek/>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 20,
    },
    nodeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    nodeWrapper: {
        alignItems: 'center',
        marginVertical: 10,
    },
    node: {
        width: 100,
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10,
    },
    nodeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    leakText: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 50, 
    },
});