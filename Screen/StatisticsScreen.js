import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function StatisticsScreen() {
  const [selectedGraph, setSelectedGraph] = useState('year');


  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Water Consumption</Text>
      {selectedGraph === 'year' && <StatisticsGraphYear />}
      {selectedGraph === 'month' && (
        <StatisticsGraphMonth/>
      )}
      {selectedGraph === 'week' && (
        <StatisticsGraphWeek/>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedGraph === 'week' && styles.selectedButton]}
          onPress={() => setSelectedGraph('week')}
        >
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedGraph === 'month' && styles.selectedButton]}
          onPress={() => setSelectedGraph('month')}
        >
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedGraph === 'year' && styles.selectedButton]}
          onPress={() => setSelectedGraph('year')}
        >
          <Text style={styles.buttonText}>Yearly</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function StatisticsGraphYear() {
  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            { data: [26, 32, 42, 13, 25, 43, 123, 132, 29, 45, 0, 0] }
          ]
        }}
        {...graphStyle()}
        yAxisSuffix='H'
      />
    </View>
  );
}

export function StatisticsGraphWeek() {
    return (
      <View style={styles.chartContainer}>
        <View style={styles.navigationContainer}>
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                { data: [2, 0, 3, 5, 22, 22, 22] }
              ]
            }}
            {...graphStyle()}
            yAxisSuffix='H'
          />
        </View>
      </View>
    );
  }


function StatisticsGraphMonth() {
return (
  <View style={styles.chartContainer}>
    <View style={styles.navigationContainer}>
      <LineChart
        data={{
          labels: ["1", "5", "10", "15", "20", "25", "30"],
          datasets: [
            { data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 25)) }
          ]
        }}
        {...graphStyle()}
        xLabelsOffset={-10}
        xAxisLabelRotation={90}
        yAxisSuffix='H'

      />
    </View>
  </View>
);
}

function graphStyle() {
  return {
    width: Dimensions.get("window").width * 0.9,
    height: 220,
    chartConfig: {
      backgroundColor: "#e0f7fa",
      backgroundGradientFrom: "#F0d8ff", //87CEFA
      backgroundGradientTo: "#F0d8ff",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`,
      style: { borderRadius: 16 }
    },
    style: { marginVertical: 8, borderRadius: 16 }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  chartContainer: {
    marginVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#80d8ff',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#6A0DAB',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  disabledText: {
    color: 'gray',
  },
});