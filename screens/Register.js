import React, { useState } from "react";
import { styles } from "../components/styles";
import { View, Text, TextInput, Keyboard, ScrollView } from "react-native";
import { Button, Avatar } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firebase-config";
import Header from "./Header";

const Register = () => {
  const navigation = useNavigation();
 

  registerUser = async (email, password) => {
    Keyboard.dismiss();
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          ingresarDatos();
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const ingresarDatos = async () => {
    try {
      await firebase
        .firestore()
        .collection("Usuarios")
        .add({
          name: { name },
          email: { email },
          password: { password },
        })
        .then(() => {
          console.log("Usuario agregado!");
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const Formulario = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
      <>
        <ScrollView style={styles.container}>
          <Header></Header>

          <Text style={styles.subtitulo}>Informacion personal </Text>

          <Text style={styles.olvideContrasenia}>Nombre completo:</Text>
          <TextInput
            onChangeText={value => {setName(value); console.log("name: "+value);}}
            value={name}
            style={styles.input}
            type="name"
          ></TextInput>

          <Text style={styles.olvideContrasenia}>Correo:</Text>
          <TextInput
            onChangeText={value => {setEmail(value); console.log("email: "+value);}}
            value={email}
            style={styles.input}
            keyboardType="email-address"
            type="email"
          ></TextInput>
          
          <Text style={styles.olvideContrasenia}>Contraseña:</Text>
          <TextInput
            onChangeText={value => {setPassword(value); console.log("password: "+value);}}
            value={password}
            style={styles.input}
            secureTextEntry={true}
            type="password"
          ></TextInput>

          <Button
            type="outline"
            title="Registrarse"
            onPress={() => registerUser(email, password)}
            titleStyle={{ color: "white" }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#df54f2", "#5986ff", "#00ffe7"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={styles.button}
          ></Button>

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
        </ScrollView>
      </>
    );
  };

  return <Formulario />;
};

export default Register;
