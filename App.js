import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, Avatar } from '@rneui/base';
import React from 'react';


export default function App(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [fontsLoaded] = useFonts({
    'Merriweather-Italic': require('./assets/fonts/Merriweather-Italic.ttf'),
  });
  const { onPress, title = 'Ingresar' } = props;
  const Formulario = () => {
    return <>
        <View style={styles.container}>
          {fontsLoaded && <Text style={{fontFamily:'Merriweather-Italic', fontSize:30, marginTop:100, marginBottom:60, marginLeft:10}}>MiAula </Text>}

          <TextInput 
          placeholder= 'Correo' 
          style={styles.input}
          ></TextInput>

          <TextInput
          placeholder= 'Contraseña'
          style={styles.input}
          ></TextInput>

          <Pressable style={styles.button} >
            <Text style={styles.text}>{title}</Text>
          </Pressable>

          <Button 
          type="outline" 
          titleStyle={{color:'black'}} 
          buttonStyle={{backgroundColor: '#F1EFEF', width:'70%', alignSelf:'center', marginTop:30, borderColor:'#7D7C7C', borderRadius:30}}>
            <Avatar 
              size={28}
              rounded source={{ uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png" }}
              containerStyle={{marginRight:8}}></Avatar> 
          Google</Button>

          {/* <Text 
          style={styles.olvideContrasenia}>
            Olvidaste tu contraseña?  </Text> */}
            
        </View>
    </>;
  }
  
  return (
    <Formulario/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFEF',
    padding:20,
    paddingBottom: 0,
  },
  input: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#373131",
    borderWidth: 1,
    margin: 8,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#191717',
    
  },
 
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  
  olvideContrasenia: {
    color: "#7D7C7C",
    marginLeft: 10,
    marginBottom: 40,
    marginTop: 6,
  },
});


