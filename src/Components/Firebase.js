import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB9hmTI8FrwwbarDfI7wMrbOnU1ZO0wkpI",
    authDomain: "agritech-6a364.firebaseapp.com",
    databaseURL: "https://agritech-6a364-default-rtdb.firebaseio.com",
    projectId: "agritech-6a364",
    storageBucket: "agritech-6a364.appspot.com",
    messagingSenderId: "165940212100",
    appId: "1:165940212100:web:e34fc4fdac78a9c62d2dd1",
    measurementId: "G-57TCL993YR"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  firebase.analytics();
  export default firebaseApp;