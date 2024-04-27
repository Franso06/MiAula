import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { CameraView } from "expo-camera/next";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";

//ToDo: Encontrar el id del alumno, guardarlos en un array con su id (para poder encontrarlo dentro del map), su nombre para esto usarlo en el chat

const OptionAlumnos = () => {
  const usuario = firebase.auth().currentUser.uid;
  const [codigo, setCodigo] = useState(null);
  const [clases, setClases] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const buscarClases = async () => {
      const querySnapshot = await firebase.firestore().collection('Clase').get();
      const clasesEncontradas = querySnapshot.docs.map((doc) => ({
        id: doc.id, // ID del documento
        idClase: doc.data().idClase.idClase // IDClase
      }));
      setClases(clasesEncontradas);
    };
    buscarClases();
  }, []);
  
  const handleCodeScanned = async (data) => {
    console.log('lectura: ' + data.data);
    console.log(clases);
  
    const claseEncontrada = clases.find((clase) => clase.idClase === data.data);
    if (claseEncontrada) {
      try {
        // Referencia al documento de la clase
        const claseRef = firebase.firestore().collection('Clase').doc(claseEncontrada.id);
  
        // Agregar el usuario a la lista de alumnos
        await claseRef.set({
          alumnos: {
            [usuario]: { nombre: 'Nombre del alumno', apellido: 'Apellido del alumno' }
          }
        }, { merge: true }); // Usamos merge para combinar datos si el documento ya existe
  
        console.log('Usuario agregado a la clase correctamente');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error al agregar usuario a la clase:', error);
      }
    } else {
      console.log('No es el QR de una clase válida');
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
