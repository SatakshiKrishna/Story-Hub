import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBPU5lMpHpB50e1VIWyS0DPjHKdTvATZIs",
  authDomain: "story-hub-b5321.firebaseapp.com",
  projectId: "story-hub-b5321",
  storageBucket: "story-hub-b5321.appspot.com",
  messagingSenderId: "23306604795",
  appId: "1:23306604795:web:543afb9460896f0554605e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   