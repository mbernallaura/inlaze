// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXs2SfbX0o6Nm_QdltpibkcB-XveKIYoA",
  authDomain: "inlazemovies.firebaseapp.com",
  projectId: "inlazemovies",
  storageBucket: "inlazemovies.appspot.com",
  messagingSenderId: "885442789918",
  appId: "1:885442789918:web:89399a999dc194c721640f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp ); // Funciones de Autenticacion
export const FirebaseBD = getFirestore( FirebaseApp ); //Config de la BD 