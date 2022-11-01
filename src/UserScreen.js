import { View, Text } from 'react-native'
import React from 'react'
import PageA from './PageA'
import PageB from './PageB'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const UserScreen = ({navigation }) => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="PageA" component={PageA} />
    <Stack.Screen name="PageB" component={PageB} />
  </Stack.Navigator>
  )
}

export default UserScreen