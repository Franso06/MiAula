import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Merriweather-Italic': require('./assets/fonts/Merriweather-Italic.ttf'),
  });
  

  return (
    <View style={styles.container}>
      {fontsLoaded && <Text style={{fontFamily:'Merriweather-Italic', fontSize:30, padding:5}}>MiAula </Text>}
      <TextInput placeholder= 'Correo' style={styles.input}></TextInput>
      <TextInput placeholder= 'Contraseña'style={styles.input}></TextInput>
      <Text>Olvide mi contraseña </Text>
      <TouchableOpacity style= {styles.boton} title='Ingresar'>
        <Text>Ingresar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 150,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
  },
  boton: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#efefef',
  },
});


