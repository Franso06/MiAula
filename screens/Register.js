import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button, Avatar } from '@rneui/base';
import {LinearGradient} from 'expo-linear-gradient';
import Header from './Header';
import {styles} from '../components/styles';

const Register = () => {
  const Register = () => {
    return <>
    <View style={styles.container}>
    <Header></Header>

      <Text 
        style={styles.subtitulo}
        >Registro </Text>
      
      <TextInput 
        style={styles.input} 
        placeholder='Correo'
      ></TextInput>
      
      <TextInput 
        style={styles.input} 
        placeholder='Contraseña'
      ></TextInput>
      <Button  type="outline" 
                title="Registrarse"
                titleStyle={{color:'white'}} 
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors:["#df54f2","#5986ff","#00ffe7"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{ width:'95%',marginBottom:7, height:45, alignSelf:'center', marginTop:20, borderRadius:5}}></Button>

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
  };


  return (
    <Register/>
  )
}

export default Register