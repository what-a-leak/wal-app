import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import data from '../Config/data.json';


export default function GetBattery({ nodeNumber }) {
    return(
        <View style={styles.container}>
            <Text style={[styles.infoValue, 
                data.nodes[nodeNumber].batterylevel < 20 && { color: 'red' }]}>
                {data.nodes[nodeNumber].batterylevel} %
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#45a049',
    },
});