import {  Text, View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './Login';
import { useFonts } from 'expo-font';
import MaskedView from "@react-native-masked-view/masked-view";
import React from 'react';

export default function Header () {
    const [fontsLoaded] = useFonts({
        'Merriweather-Italic': require('../assets/fonts/Merriweather-Italic.ttf'),
        'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
        'Kalam-Light': require('../assets/fonts/Kalam-Light.ttf'),
        'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
        'AmaticSC-Regular': require('../assets/fonts/AmaticSC-Regular.ttf'),
      });
    const GradientText = (props) => {
      return (
        <MaskedView maskElement={<Text {...props} />}>
          <LinearGradient
            colors={["#df54f2","#5986ff","#00ffe7"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
    };

    return(
      <>

      <View style={{marginBottom:50}}></View>
          {fontsLoaded && <GradientText style={styles.titulo}>MiAula</GradientText>}
          <Text style={{fontSize: 12.5,alignSelf:'flex-end', color: "#7D7C7C",right:30,top:2}}>para alumnos y profesores </Text>

         <Image style={styles.imagen} source={require('../assets/logo.png')} />
    </>
    );
  };