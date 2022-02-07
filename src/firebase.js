// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDDHHI4eCC_uT--LfzGOuVJ9qd5xjRkEGc",
    authDomain: "anime-studio-e3f98.firebaseapp.com",
    projectId: "anime-studio-e3f98",
    storageBucket: "anime-studio-e3f98.appspot.com",
    messagingSenderId: "391115932386",
    appId: "1:391115932386:web:6aad39eb3b4125d10b94bb",
    measurementId: "G-3XC6PC0XQQ"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};