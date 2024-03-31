import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { CameraView } from "expo-camera/next";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";

//ToDo: Cuando se lea el QR que se agregue el usuario a la clase del qr.

const OptionAlumnos = () => {
  const usuario = firebase.auth().currentUser.uid; // Obtenemos el UID del usuario actual
  const [codigo, setCodigo] = useState(null);
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();

    const buscarClases = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection("Clase")
        .get();
      const clasesEncontradas = [];

      querySnapshot.forEach((documentSnapshot) => {
        const idClases = documentSnapshot.data().idClase.idClase;

        clasesEncontradas.push( idClases );
      });

      setLista(clasesEncontradas);
    };
    buscarClases();


  const handleCodeScanned = (data) => {
    console.log("lectura: " + data.data);
    console.log(lista);
    if(lista.includes(data.data)){
      navigation.navigate('Home') 
    }else{
      console.log("no es el qr de una clase");
    }
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.subtitulo}>¡Escanea el QR de tu profe! </Text>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={{ flex: 1, maxHeight: "80%" }}
        onBarcodeScanned={handleCodeScanned}
      />
    </View>
  );
};

export default OptionAlumnos;
