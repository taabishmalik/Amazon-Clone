// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCNM5oQ1z40vt_wflwt3pvzcVRTlQupQbA",
    authDomain: "e-clone-3bc43.firebaseapp.com",
    projectId: "e-clone-3bc43",
    storageBucket: "e-clone-3bc43.appspot.com",
    messagingSenderId: "147440356219",
    appId: "1:147440356219:web:8e8750eb3a989beb978bde",
    measurementId: "G-XBLWG8SE08"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth};