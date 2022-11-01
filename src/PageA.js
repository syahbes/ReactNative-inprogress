import { View, Text } from 'react-native'
import React from 'react'
import { Button, StyleSheet } from 'react-native'

const PageA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.textBox}>This is the A page</Text>
      <Button onPress={() => { navigation.navigate('PageB') }} title="Go to Page B" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    // flex: 1,
    height: 250,
    width: 250,
    border: '1px solid black',
    borderRadius: '15px',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    margin: 10,
  }
})
export default PageA