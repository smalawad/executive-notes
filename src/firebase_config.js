import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCkcmYsNOW1f1Gsf7pwxoCN_A8ED9aeVlI",
    authDomain: "executive-notes.firebaseapp.com",
    projectId: "executive-notes",
    storageBucket: "executive-notes.appspot.com",
    messagingSenderId: "703106802304",
    appId: "1:703106802304:web:c5c9399eb7b57d55893c65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // const db = firebase.firestore();
  
  export default firebase;
  