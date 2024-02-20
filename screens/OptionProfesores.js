import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from "../components/styles";
import { Button } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";

const OptionProfesores = () => {
    const navigation = useNavigation();


    //ToDo: Que guarde la informacion en la bd y ademas crear un QR con el id de la clase

  return (
    <View style={styles.container}>
      <Header></Header>
      
      <Text style={styles.subtitulo}>Creación de la clase </Text>

      <Text style={styles.olvideContrasenia}>Curso:</Text>
      <TextInput style={styles.input}/>
      
      <Text style={styles.olvideContrasenia}>Asignatura:</Text>
      <TextInput style={styles.input}/>
      
      <Button 
      onPress={() => navigation.navigate('Home')}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ["#fd3cff","#00cdc8"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      buttonStyle={styles.button}
      >Crear
      </Button>
    </View>
  )
}

export default OptionProfesores