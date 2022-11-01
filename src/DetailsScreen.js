import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Home Screen without back button"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
  )
}

export default DetailsScreen

