import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../config/data.json';

export default function GetBattery({ nodeNumber }) {
    const node = data.find(node => node.NodeID === nodeNumber + 1);
    const batteryLevel = node ? node.Batterie : null;
    let batteryIcon = 'battery-full';
    let batteryColor = '#45a049';

    if (batteryLevel < 20) {
        batteryIcon = 'battery-empty';
        batteryColor = 'red';
    } else if (batteryLevel < 40) {
        batteryIcon = 'battery-quarter';
        batteryColor = 'orange';
    } else if (batteryLevel < 60) {
        batteryIcon = 'battery-half';
        batteryColor = 'yellow';
    } else if (batteryLevel < 80) {
        batteryIcon = 'battery-three-quarters';
        batteryColor = '#45a049';
    }

    return (
        <View style={styles.container}>
            <Icon name={batteryIcon} size={24} color={batteryColor} style={styles.icon} />
            <Text style={[styles.infoValue, { color: batteryColor }]}>
                {batteryLevel}%
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        transform: [{ rotate: '-90deg' }],
    },
    infoValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});