import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import { Button } from "@rneui/base";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

//ToDo: recorrer todas las clases, mostrar todas las clases que tenga un profesor, al ingresar a esta se debe ver el chat y el qr del mismo.

const Home = () => {
  const usuario = firebase.auth().currentUser.uid; // Obtenemos el UID del usuario actual
  const [codigo, setCodigo] = useState(null);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const buscarProfesor = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection("Clase")
        .get();
      const clasesEncontradas = [];

      querySnapshot.forEach((documentSnapshot) => {
        const idProfe = documentSnapshot.data().profesor.profesor;

        if (usuario === idProfe) {
          const idClases = documentSnapshot.data().idClase.idClase;
          const asignatura = documentSnapshot.data().asignatura.asignatura;
          const curso = documentSnapshot.data().curso.curso;

          clasesEncontradas.push({ asignatura, curso });
          setCodigo(idClases);
        }
      });

      setLista(clasesEncontradas);
    };

    buscarProfesor();
  }, [usuario]);

  return (
    <ScrollView style={styles.container}>
      {codigo ? ( //Interfaz del profesor
        <>
          {/* <QRCode
            value={codigo}
            size={200}
            color="white"
            backgroundColor="black"
          /> */}
          <View style={{marginTop:60}}/>
          {lista.map((clase, index) => (
            <List.Item
            key={index}
            title= {` ${clase.curso}`}
            description={`${clase.asignatura}`}
            backgroundColor = "white"
            style={{borderRadius:10, marginBottom:6, marginTop:6}}
            />
            ))}
        <Button title="Salir" style= {{}} onPress={() => firebase.auth().signOut()} />
        </>
      ) : (
        //interfaz del alumno
        <Button title="Salir" onPress={() => firebase.auth().signOut()} />
      )}
    </ScrollView>
  );
};

export default Home;
