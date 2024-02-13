// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9g_iL4VuRVZIKvl20REWlbVbn1h6o61k",
  authDomain: "miaula-ebef9.firebaseapp.com",
  projectId: "miaula-ebef9",
  storageBucket: "miaula-ebef9.appspot.com",
  messagingSenderId: "1031512577839",
  appId: "1:1031512577839:web:b87aaebcc70bc254cdb3da",
  measurementId: "G-M38Q14X7F1"
};

if(!firebase.apps.length){  
    firebase.initializeApp(firebaseConfig);
};

export {firebase};