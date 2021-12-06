import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDbZV9wv697r24-0pbryviL7K12hrewHmk",
    authDomain: "react-chat-f406d.firebaseapp.com",
    projectId: "react-chat-f406d",
    storageBucket: "react-chat-f406d.appspot.com",
    messagingSenderId: "121130318729",
    appId: "1:121130318729:web:0bf6dfd2cfab8cf48f3f58"
  }).auth();
