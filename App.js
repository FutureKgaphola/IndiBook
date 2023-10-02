import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Market from './screens/Market';
import Share from './screens/Share';
import Networks from './screens/Networks';
import Places from './screens/Places';
import {FontAwesome, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
        />
        
        <Tab.Screen name="Market" component={Market} 
        options={{
          tabBarLabel: 'market',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" size={26} color="black" />
          ),
        }}
        />
        
        <Tab.Screen name="Post" component={Share} 
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square" size={26} color="black" />
          ),
        }}
        />
        <Tab.Screen name="Connections" component={Networks} options={{
          tabBarLabel: 'Connections',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people" size={26} color="black" />
          ),
        }}
        />
        <Tab.Screen name="Places" component={Places} options={{
          tabBarLabel: 'Places',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="map" size={26} color="black" />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
