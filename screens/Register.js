import React, {useState} from 'react'
import {styles} from '../components/styles';
import { View, Text, TextInput } from 'react-native'
import { Button, Avatar } from '@rneui/base';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../firebase-config';
import firestore from '@react-native-firebase/firestore';
import Header from './Header';

const Register = () => {
  const navigation = useNavigation();
    const [name, setName] = useState('');
    var nombre = '';
    const [email, setEmail] = useState('');
    var correo = '';
    const [password, setPassword] = useState('');
    var contra = '';

    registerUser = async (email, password) => {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        if(!email || email==''){
          alert("Debe ingresar un correo")
        }else if(!password || password==''){
          alert("Debe ingresar la contraseña")
        }
        
      };
  };


  const Formulario = () => {
    return <>
    <View style={styles.container}>
    <Header></Header>

      <Text 
        style={styles.subtitulo}
        >Registro </Text>
      <TextInput 
        placeholder= 'Nombre' 
        onChangeText={(value) => nombre = value} 
        onEndEditing={()=> {setName(nombre); console.log("nombre: "+nombre);}}
        defaultValue={name}
        style={styles.input}
        type="name"
      ></TextInput>

      <TextInput 
        placeholder= 'Correo' 
        onChangeText={(value) => correo = value} 
        onEndEditing={()=> {setEmail(correo); console.log("correo: "+correo);}}
        defaultValue={email}
        style={styles.input}
        keyboardType="email-address"
        type="email"
      ></TextInput>
      
      <TextInput 
        placeholder= 'Contraseña'
        onChangeText={(value) => contra = value} 
        onEndEditing={()=> {setPassword(contra); console.log("contraseña: "+contra);}}
        defaultValue={password}
        style={styles.input}
        secureTextEntry={true}
        type="password"
      ></TextInput>

      <Button  type="outline" 
                title="Registrarse"
                onPress={() => registerUser(email, password)}
                titleStyle={{color:'white'}} 
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors:["#df54f2","#5986ff","#00ffe7"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{ width:'95%',marginBottom:7, height:45, alignSelf:'center', marginTop:20, borderRadius:5}}></Button>

            {/* <Text style={{alignSelf:'center'}}>o</Text> */}
      {/* <Button 
          type="outline" 
          titleStyle={{color:'black'}} 
          buttonStyle={{backgroundColor: '#F1EFEF', width:'95%', alignSelf:'center', marginTop:10, borderColor:'#7D7C7C', borderRadius:5}}>
            <Avatar 
              size={28}
              rounded source={{ uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png" }}
              containerStyle={{marginRight:8}}>
            </Avatar> 
        Google
      </Button> */}
    </View>
    </>;
  };


  return (
    <Formulario/>
  )
}

export default Register