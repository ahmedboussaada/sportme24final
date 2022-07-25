import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCBMqs-dfajxlHzWnR8jrct-_RB5aYMAAE",
    authDomain: "sportme24-bc5e8.firebaseapp.com",
    projectId: "sportme24-bc5e8",
    storageBucket: "sportme24-bc5e8.appspot.com",
    messagingSenderId: "107305601812",
    appId: "1:107305601812:web:792a35a3dbb2491daf1001",
    measurementId: "G-RDQWFDET6N"
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db