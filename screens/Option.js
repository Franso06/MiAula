import React from "react";
import { View, Text } from "react-native";
import { styles } from "../components/styles";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";

const Option = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text style={styles.subtitulo}>¿Eres profesor o alumno? </Text>

      <Button
        onPress={() => navigation.navigate('OptionProfesores') }
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#00cdc8", "#fd3cff"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        buttonStyle={styles.button}
      >
        Profesor
      </Button>

      <Button 
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ["#fd3cff","#00cdc8"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      buttonStyle={styles.button}
      >Alumno
      </Button>
      
    </View>
  );
};

export default Option;
