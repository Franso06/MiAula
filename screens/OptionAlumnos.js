import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../firebase-config";
import { styles } from "../components/styles";
import { CameraView } from "expo-camera/next";
import Header from "./Header";

//ToDo: cuando lea el qr, que ya lo hace, debe de buscarse si existe una clase con esa id y si es asi entonces que lo envie a 'Home'
//ToDo2: colocar una id unica de la clase y asignatura, ya que un profesor puede tener varias clases
const OptionAlumnos = () => {
  const [codigo, setCodigo] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  
  const handleCodeScanned = (data) => {
    if(data){
      console.log(data.data);
    }
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
      }}
      style={{ flex: 1 }}
      onBarcodeScanned={handleCodeScanned}
    />
    </View>
  );
};

export default OptionAlumnos;
