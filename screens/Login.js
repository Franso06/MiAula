import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import MaskedView from "@react-native-masked-view/masked-view";
import React from 'react';

export const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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
    
    const Formulario = () => {
      return <>
          <View style={styles.container}>
            
              <View style={{marginBottom:50}}></View>
              {fontsLoaded &&<GradientText style={styles.titulo}>MiAula</GradientText>}
              <Text style={{fontSize: 12.5,alignSelf:'flex-end', color: "#7D7C7C",right:30,top:2}}>para alumnos y profesores </Text>

              <Image style={styles.imagen} source={require('../assets/logo.png')} />
            
            <Text 
              style={styles.subtitulo}
              >Ingresa o registrate </Text>
  
            <TextInput 
                placeholder= 'Correo' 
                style={styles.input}
                type="email"
            ></TextInput>
  
            <TextInput
                placeholder= 'Contraseña'
                style={styles.input}
                secureTextEntry={true}
            ></TextInput>
            <Text 
                style={styles.olvideContrasenia}>
                No tienes cuenta? <Text onPress={() => navigation.navigate('Register') }style={{textDecorationLine: 'underline', color:'black'}}>Registrate</Text>  </Text>
            <Button  type="outline" 
                title="Ingresar"
                titleStyle={{color:'white'}} 
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors:["#df54f2","#5986ff","#00ffe7"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{ width:'95%',marginBottom:7, height:45, alignSelf:'center', marginTop:20, borderRadius:5}}></Button>

            <Text style={{alignSelf:'center'}}>o</Text>
  
            <Button 
              type="outline" 
              titleStyle={{color:'black'}} 
              buttonStyle={{backgroundColor: '#F1EFEF', width:'95%', alignSelf:'center', marginTop:10, borderColor:'#7D7C7C', borderRadius:5}}>
                <Avatar 
                  size={28}
                  rounded source={{ uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png" }}
                  containerStyle={{marginRight:8}}>
                </Avatar> 
            Google
            </Button>
  
            
              
          </View>
      </>;
    }
    
    return (
      <Formulario/>
    );
}

export const styles = StyleSheet.create({
    imagen:{
      width:180,
      height:180,
      marginBottom:-90,
      bottom:110,
      marginLeft:-30,
    },
    titulo:{
      fontSize: 80,
      fontFamily: 'AmaticSC-Bold', 
      marginLeft:155,
      margin:-15,
    },
    subtitulo:{
        fontSize:20, 
        marginTop:0, 
        marginBottom:10,
        marginLeft:10, 
        alignSelf:'flex-start'
    },
    container: {
      flex: 1,
      backgroundColor: '#F1EFEF',
      padding:20,
      paddingBottom: 0,
    },
    input: {
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "#373131",
      borderWidth: 1,
      margin: 8,
      padding: 10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 8,
      borderRadius: 5,
      marginTop: 40,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    
    olvideContrasenia: {
      color: "#7D7C7C",
      marginLeft: 12,
      marginTop: 10,
    },
  });

  export default Login;