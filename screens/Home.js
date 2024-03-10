import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import React, { useState, useEffect } from "react";

//ToDo: recorrer todas las clases, mostrar todas las clases que tenga un profesor, al ingresar a esta se debe ver el chat y el qr del mismo.

const Home = () => {
  const [codigo, setCodigo] = useState(null);
  const usuario = firebase.auth().currentUser.uid; // Obtenemos el UID del usuario actual

  useEffect(() => {
    const buscarProfesor = async () => {
      const querySnapshot = await firebase.firestore().collection('Clase').get();
      querySnapshot.forEach((documentSnapshot) => {
        const idProfe = documentSnapshot.data().profesor.profesor;
        if (usuario === idProfe) {
          const idClases = documentSnapshot.data().idClase.idClase;
          setCodigo(idClases); // Actualizamos el estado con el idClase encontrado
        }
      });
    };  

    buscarProfesor();
  }, [usuario]); // El efecto se ejecutará cuando el valor de 'usuario' cambie

  return (
    <View style={styles.container}>
      {codigo ? ( //Interfaz del profesor
        <>
          <Button
            title="Salir"
            onPress={() => firebase.auth().signOut()}
          />
          <QRCode
            value={codigo}
            size={200}
            color="white"
            backgroundColor="black"
          />
        </>
      ) : ( //interfaz del alumno
        <Button
          title="Salir"
          onPress={() => firebase.auth().signOut()}
        />
      )}
    </View>
  );
};

export default Home;
