import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function StatisticsScreen() {
  const [selectedGraph, setSelectedGraph] = useState('year');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
  const currentYear = new Date().getFullYear();

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    if (currentMonth < new Date().getMonth() || currentYear < new Date().getFullYear()) {
      setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    }
  };

  const handlePreviousWeek = () => {
    setCurrentWeek((prevWeek) => (prevWeek === 1 ? 52 : prevWeek - 1));
  };

  const handleNextWeek = () => {
    if (currentWeek < getCurrentWeek() || currentYear < new Date().getFullYear()) {
      setCurrentWeek((prevWeek) => (prevWeek === 52 ? 1 : prevWeek + 1));
    }
  };

  return (
    <View style={styles.container}>
      {selectedGraph === 'year' && <StatisticsGraphYear />}
      {selectedGraph === 'month' && (
        <StatisticsGraphMonth
          currentMonth={currentMonth}
          handlePreviousMonth={handlePreviousMonth}
          handleNextMonth={handleNextMonth}
        />
      )}
      {selectedGraph === 'week' && (
        <StatisticsGraphWeek
          currentWeek={currentWeek}
          handlePreviousWeek={handlePreviousWeek}
          handleNextWeek={handleNextWeek}
        />
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
      <Text style={styles.chartTitle}>Yearly Consumption</Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            { data: [100, 200, 300, 450, 250, 200, 300, 450, 450, 450, 470, 450] }
          ]
        }}
        {...graphStyle()}
      />
    </View>
  );
}

export function StatisticsGraphWeek({ currentWeek, handlePreviousWeek, handleNextWeek, enableNavigation = true }) {
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Consumption - Week {currentWeek}</Text>
        <View style={styles.navigationContainer}>
          {enableNavigation && (
          <TouchableOpacity onPress={handlePreviousWeek}>
            <Text style={styles.navigationText}>{"<"}</Text>
          </TouchableOpacity>
          )}
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                { data: [320, 170, 220, 200, 0, 300, 150] }
              ]
            }}
            {...graphStyle()}
          />
          {enableNavigation && (
          <TouchableOpacity onPress={handleNextWeek} disabled={currentWeek === getCurrentWeek()}>
            <Text style={[styles.navigationText, currentWeek === getCurrentWeek() && styles.disabledText]}>{">"}</Text>
          </TouchableOpacity>
        )}
        </View>
      </View>
    );
  }

function getCurrentWeek() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
  }

function StatisticsGraphMonth({ currentMonth, handlePreviousMonth, handleNextMonth }) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const isNextDisabled = currentMonth === new Date().getMonth();

return (
    <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Consumption - {monthNames[currentMonth]}</Text>
        <View style={styles.navigationContainer}>
            <TouchableOpacity onPress={handlePreviousMonth}>
                <Text style={styles.navigationText}>{"<"}</Text>
            </TouchableOpacity>
            <LineChart
                data={{
                    labels: ["1", "5", "10", "15", "20", "25", "30"],
                    datasets: [
                        { data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 500)) }
                    ]
                }}
                {...graphStyle()}
                xLabelsOffset={-10}
                xAxisLabelRotation={90}
            />
            <TouchableOpacity onPress={handleNextMonth} disabled={isNextDisabled}>
                <Text style={[styles.navigationText, isNextDisabled && styles.disabledText]}>{">"}</Text>
            </TouchableOpacity>
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
      backgroundGradientFrom: "#80d8ff",
      backgroundGradientTo: "#80d8ff",
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
    backgroundColor: '#3F51B5',
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