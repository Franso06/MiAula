import { Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import Header from './Header';
import { styles } from '../components/styles';
import {firebase} from '../firebase-config';
import React, {useState} from 'react';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    var correo = '';
    const [password, setPassword] = useState('');
    var contra = '';

    loginUser = async (email, password) => {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
          if(!email || email==''){
            alert("Debe ingresar un correo")
          }else if(!password || password==''){
            alert("Debe ingresar la contraseña")
          }
        };
    };

    const [fontsLoaded] = useFonts({
      'Merriweather-Italic': require('../assets/fonts/Merriweather-Italic.ttf'),
      'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
      'Kalam-Light': require('../assets/fonts/Kalam-Light.ttf'),
      'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
      'AmaticSC-Regular': require('../assets/fonts/AmaticSC-Regular.ttf'),
    });

    const Formulario = () => {
      return <>
          <View style={styles.container}>
            <Header></Header>
            <Text 
              style={styles.subtitulo}
              >Ingresa o registrate </Text>
  
            <TextInput 
                placeholder= 'Correo' 
                onChangeText={(value) => correo = value} //esto se debe hacer ya que el input al estar dentro de un scroll solo agrega la 1 letra
                onEndEditing={()=> {setEmail(correo); console.log("correo: "+correo);}}
                defaultValue={email}
                style={styles.input}
                type="email"
            />
  
            <TextInput
                placeholder= 'Contraseña'
                onChangeText={(value) => contra = value} 
                onEndEditing={()=> {setPassword(contra); console.log("contraseña: "+contra);}}
                defaultValue={password}
                style={styles.input}
                secureTextEntry={true}
            />
            <Text 
                style={styles.olvideContrasenia}>
                No tienes cuenta? <Text onPress={() => navigation.navigate('Register') }style={{textDecorationLine: 'underline', color:'black'}}>Registrate</Text>  </Text>
            <Button  type="outline" 
                title="Ingresar"
                onPress={() => loginUser(email, password)}
                titleStyle={{color:'white'}} 
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors:["#df54f2","#5986ff","#00ffe7"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{ width:'95%',marginBottom:7, height:45, alignSelf:'center', marginTop:20, borderRadius:5}}></Button>

            {/* <Text style={{alignSelf:'center'}}>o</Text> */}
  
            {/* <Button 
              type="outline" 
              titleStyle={{color:'black'}} 
              buttonStyle={{backgroundColor: '#F1EFEF', width:'95%', alignSelf:'center', marginTop:10, borderColor:'#7D7C7C', borderRadius:5}}>
                <Avatar 
                  size={28}
                  rounded source={{ uri: "https://cdn-icons-png.flaticon.com/512/300/300221.png" }}
                  containerStyle={{marginRight:8}}>
                </Avatar> 
            Google
            </Button> */}
  
            
              
          </View>
      </>;
    }
    
    return (
      <Formulario/>
      
    );
}


