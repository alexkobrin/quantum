import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig ={
  apiKey: "AIzaSyC1poeyjxwkn2trvaoAGOd50O9EF0ddMmw",
  authDomain: "quantum-market.firebaseapp.com",
  projectId: "quantum-market",
  storageBucket: "quantum-market.appspot.com",
  messagingSenderId: "428213179260",
  appId: "1:428213179260:web:e43777ffb1cf9013c2caf9"
};
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}