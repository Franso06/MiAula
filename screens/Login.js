import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, Avatar } from '@rneui/base';
import React from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const [fontsLoaded] = useFonts({
      'Merriweather-Italic': require('../assets/fonts/Merriweather-Italic.ttf'),
    });
    const Formulario = () => {
      return <>
          <View style={styles.container}>
            {fontsLoaded && <Text style={{fontFamily:'Merriweather-Italic', fontSize:25, marginTop:150, marginBottom:30,marginLeft:15, alignSelf:'flex-start'}}>Ingresa o registrate </Text>}
  
            <TextInput 
            placeholder= 'Correo' 
            style={styles.input}
            type="email"
            // onChangeText={(text)=> setEmail(text)}
            ></TextInput>
  
            <TextInput
            placeholder= 'Contraseña'
            style={styles.input}
            secureTextEntry={true}
            // onChangeText={(text)=> setEmail(text)}
            ></TextInput>
            <Text 
            style={styles.olvideContrasenia}>
              No tienes cuenta? <Text style={{textDecorationLine: 'underline', color:'black'}}>Registrate</Text>  </Text>
            <Button  type="outline" 
              title="Ingresar"
              titleStyle={{color:'white'}} 
              buttonStyle={{backgroundColor: 'black', width:'95%',marginBottom:7, height:45, alignSelf:'center', marginTop:45, borderColor:'black', borderRadius:5}}></Button>
            
            <Text style={{alignSelf:'center'}}>o</Text>
  
            <Button 
              type="outline" 
              titleStyle={{color:'black'}} 
              buttonStyle={{backgroundColor: '#F1EFEF', width:'95%', alignSelf:'center', marginTop:10, borderColor:'#7D7C7C', borderRadius:5}}>
                <Avatar 
                  size={28}
                  rounded source={{ uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png" }}
                  containerStyle={{marginRight:8}}>
                </Avatar> 
            Google
            </Button>
  
            
              
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
      marginTop: 40,
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
      marginLeft: 12,
      marginTop: 10,
    },
  });

  export default Login;