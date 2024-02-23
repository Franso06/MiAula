import { View, Text, TextInput } from 'react-native';
import React, {useState} from 'react';
import { styles } from "../components/styles";
import { Button } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firebase-config";
import QRCode from 'react-native-qrcode-svg';
import Header from "./Header";

const OptionProfesores = () => {
    const navigation = useNavigation();
    const profesor = firebase.auth().currentUser.uid;
    if (profesor){
      console.log(profesor);
    };

    const [curso, setCurso] = useState(null);
    const [asignatura, setAsignatura] = useState(null);

    const ingresarDatos = async () => {
    try {
      await firebase
        .firestore()
        .collection("Clase")
        .add({
          profesor: {profesor},
          curso: { curso },
          asignatura: { asignatura },
        })
        .then(() => {
          console.log("Clase agregada!");
          navigation.navigate('Home');
        });
    } catch (error) {
      console.error(error.message);
    }
  };

 
    //ToDo: Que guarde la informacion en la bd y ademas crear un QR con el id de la clase

  return (
    <View style={styles.container}>
      <Header></Header>
      
      <Text style={styles.subtitulo}>Creación de la clase </Text>

      <Text style={styles.olvideContrasenia}>Curso:</Text>
      <TextInput
      onChangeText={value => {setCurso(value); console.log("curso: "+value);}} 
      style={styles.input}/>
      
      <Text style={styles.olvideContrasenia}>Asignatura:</Text>
      <TextInput 
      onChangeText={value => {setAsignatura(value); console.log("asignatura: "+value);}}       
      style={styles.input}/>
      
      <Button 
      onPress={() => ingresarDatos()}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ["#fd3cff","#00cdc8"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      buttonStyle={styles.button}
      >Crear
      </Button>
      {/* <QRCode
        value={profesor}
        size={200}
        color='white'
        backgroundColor='black'>
        </QRCode> */}
    </View>
  )
}

export default OptionProfesores