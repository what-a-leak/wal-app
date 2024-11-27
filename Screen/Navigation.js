import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoricScreen from './HistoricScreen';
import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import LeakScreen from './LeakScreen';
import NodeInfo from './NodeInfo';
import StatisticsScreen from './StatisticsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
            initialRouteName="DashboardScreen"
            screenOptions={{headerStyle: {backgroundColor: '#3F51B5',},headerTintColor: '#fff',tabBarLabel: () => null, tabBarStyle: {backgroundColor: '#3F51B5',}}}>

        {/* <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{tabBarIcon: ({focused})=> (
          <Icon name="user" size={24} color={focused ? 'grey' : 'white'}/>
          ),
        }}/> */}

        <Tab.Screen name="HistoricScreen" component={HistoricScreen} options={{tabBarIcon: ({focused})=> (
          <Icon name="history" size={24} color={focused ? 'grey' : 'white'}/>
          ),
        }}/>

        <Tab.Screen name="DashboardScreen" component={DashboardScreen} options={{tabBarIcon: ({focused})=> (
          <Icon name="tint" size={24} color={focused ? 'grey' : 'white'}/>
          ),
        }}/>

        <Tab.Screen name="LeakScreen" component={LeakScreen} options={{tabBarIcon: ({focused})=> (
          <Icon name="exclamation-triangle" size={24} color={focused ? 'grey' : 'white'}/>
          ),
        }}/>

        <Tab.Screen name="StatisticsScreen" component={StatisticsScreen} options={{tabBarIcon: ({focused})=> (
          <Icon name="bar-chart" size={24} color={focused ? 'grey' : 'white'}/>
          ),
        }}/>

        <Tab.Screen name="NodeInfo1" component={NodeInfo} initialParams={{ nodeNumber: 0 }} options={{tabBarButton: () => null}}/>
        <Tab.Screen name="NodeInfo2" component={NodeInfo} initialParams={{ nodeNumber: 1 }} options={{tabBarButton: () => null}}/>
        <Tab.Screen name="NodeInfo3" component={NodeInfo} initialParams={{ nodeNumber: 2 }} options={{tabBarButton: () => null}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f24e4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navigation;