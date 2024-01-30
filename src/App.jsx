import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './components/Tab';

const App =() =>{
  const [name, setName] = useState('Home')

  const handleName= (item) =>{
    console.log(item)
  }

  return(
    <NavigationContainer style={styles.container}>
      <Tabs />
      {/* <TabPanel onNameChange={handleName}/> */}
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  }
})