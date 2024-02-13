import { View, Text } from 'react-native'
import { Button} from '@rneui/base';
import {firebase} from '../firebase-config';
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={()=>firebase.auth().signOut()}>Salir</Button>
    </View>
  )
}

export default Home