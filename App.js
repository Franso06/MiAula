import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import OptionAlumnos from './screens/OptionAlumnos';
import Home from './screens/Home';
import Option from './screens/Option';
import Register from './screens/Register';
import OptionProfesores from './screens/OptionProfesores';
import {firebase} from './firebase-config';

const Stack = createNativeStackNavigator();

const App = ()=>  {

  const [initializing, setInitializing] = useState(true); 
  const [user, setUser] = useState(); 

  
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing){
      setInitializing(false);
    }
  };
  
  useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; 
  }, []);
  

  if(initializing) return null;
  
  if(!user){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name= "Login" component= {Login}/>
        <Stack.Screen name= "Register" component= {Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name= "Home" component= {Home}/>
      <Stack.Screen name= "OptionAlumnos" component= {OptionAlumnos}/>  
      <Stack.Screen name= "Option" component= {Option}/>
      <Stack.Screen name= "OptionProfesores" component= {OptionProfesores}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
