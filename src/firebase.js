import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATs_DUXz6fW2G8BlM7X4Ext6IbdFSxEHA",
    authDomain: "twitter-clone-94d49.firebaseapp.com",
    databaseURL: "https://twitter-clone-94d49.firebaseio.com",
    projectId: "twitter-clone-94d49",
    storageBucket: "twitter-clone-94d49.appspot.com",
    messagingSenderId: "822738351687",
    appId: "1:822738351687:web:e0ebe2fd4b7d6bce8ba362",
    measurementId: "G-LHJS5TD26N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;