import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imagen:{
      width:180,
      height:180,
      marginBottom:-90,
      bottom:120,
      marginLeft:-12,
    },
    titulo:{
      fontSize: 80,
      fontFamily: 'AmaticSC-Bold', 
      marginLeft:165,
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
      padding:10,
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
      width:'95%',
      marginBottom:0, 
      height:45, 
      alignSelf:'center', 
      marginTop:15, 
      borderRadius:7
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
    dropdown: {
      height: 50,
      borderColor: '#F1EFEF',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: '#F1EFEF',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 18,
      height: 18,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });