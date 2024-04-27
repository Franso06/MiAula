import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import { Button } from "@rneui/base";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

//ToDo: buscar a los alumnos si es que ya estan o no en una clase, si no estan entonces redirigirlos hacia el lector de qr y asi tambien ver las clases en las que estos estan y mostrarlas tal cual como la de los profes

const Home = () => {
  const usuario = firebase.auth().currentUser.uid; // Obtenemos el UID del usuario actual
  const [codigo, setCodigo] = useState(null);
  const [lista, setLista] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);


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
    buscarUsuarios();
  }, [usuario]);

  const buscarUsuarios = async () => {
    const querySnapshot = await firebase
      .firestore()
      .collection("Usuarios")
      .get();
    const usuariosEncontrados = [];

    querySnapshot.forEach((documentSnapshot) => {
      const idUsuarios = documentSnapshot.data().id;

      usuariosEncontrados.push( idUsuarios );
    });

    setListaUsuarios(usuariosEncontrados);
  };

  console.log(listaUsuarios);

  return (
    <ScrollView style={styles.container}>
      {codigo ? ( //Interfaz del profesor
        <>
          <View style={{ margin:60, padding:60 , alignContent:'center', alignSelf:'center' }}>
            <QRCode
              value={codigo}
              size={200}
              color="black"
              backgroundColor="white"
            />
          </View>

          <View style={{ marginTop: 60 }} />
          {lista.map((clase, index) => (
            <List.Item
              key={index}
              title={` ${clase.curso}`}
              description={`${clase.asignatura}`}
              backgroundColor="white"
              style={{ borderRadius: 10, marginBottom: 6, marginTop: 6 }}
            />
          ))}
          <Button
            title="Salir"
            style={{}}
            onPress={() => firebase.auth().signOut()}
          />
        </>
      ) : (
        //interfaz del alumno
        <Button title="Salir" onPress={() => firebase.auth().signOut()} />
      )}
    </ScrollView>
  );
};

export default Home;
