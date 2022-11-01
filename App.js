// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { useState } from 'react';

import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import NotificationsScreen from './src/NotificationsScreen';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';
import TasksScreen from './src/TasksScreen';
import LoginScreen from './src/LoginScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  if (isLogin) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({

            headerTitleAlign: 'center',
            tabBarIcon: ({ focused, color, size }) => {
              //replace with switch or object map

              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              }
              else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications' : 'notifications-outline';
              }
              else if (route.name === 'User') {
                iconName = focused ? 'person' : 'person-outline';
              }
              else if (route.name === 'Tasks') {
                iconName = focused ? 'checkbox' : 'checkbox-outline';
              }

              // You can return any component that you like here!

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            title: 'בית',
            // headerTitleAlign: 'center',

            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',

            // },
          }}
          />
           
          <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarBadge: 3, title: 'התראות' }} />
          <Tab.Screen name="User" component={UserScreen} options={{ title: 'פרופיל' , headerShown: false }} />
          <Tab.Screen name="Tasks" component={TasksScreen} options={{ title: 'משימות' }} />
     
        </Tab.Navigator>

      </NavigationContainer>
    );
  }
  else { return <LoginScreen /> }
}