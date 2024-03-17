import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, ListItem } from "@rneui/base";
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

  // const llenarLista = async () => {
  //   const querySnapshot = await firebase.firestore().collection("Clase").get();
  //   querySnapshot.forEach((documentSnapshot) => {
  //     const data = documentSnapshot.data();
  //     const id = documentSnapshot.data().profesor;
  //   });
  // };

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

  const ListaClases = () => {
    return (
      <>
        <ScrollView>
          {lista.map((clase, index) => (
            <ListItem
              key={index}
              title={clase.curso}
              subtitle={clase.asignatura}
              bottomDivider
              chevron
            />
          ))}
        </ScrollView>
      </>
    );
  };
  return (
    <ScrollView style={styles.container}>
      {codigo ? ( //Interfaz del profesor
        <>
          <Button title="Salir" onPress={() => firebase.auth().signOut()} />
          <QRCode
            value={codigo}
            size={200}
            color="white"
            backgroundColor="black"
          />
          <ListaClases />
        </>
      ) : (
        //interfaz del alumno
        <Button title="Salir" onPress={() => firebase.auth().signOut()} />
      )}
    </ScrollView>
  );
};

export default Home;
