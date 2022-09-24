import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDN5LLhQXxBRddAoXL4P3YIsfPdZH-Dpz4",
  authDomain: "chocomint-fa88b.firebaseapp.com",
  databaseURL: "https://chocomint-fa88b-default-rtdb.firebaseio.com",
  projectId: "chocomint-fa88b",
  storageBucket: "chocomint-fa88b.appspot.com",
  messagingSenderId: "285501952959",
  appId: "1:285501952959:web:9b41aaf18e894f61b5070a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
