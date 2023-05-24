// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6SbVkk4tIz-7wZdUuj7oUKKm9X1_rl9g",
  authDomain: "charitychain-c1410.firebaseapp.com",
  projectId: "charitychain-c1410",
  storageBucket: "charitychain-c1410.appspot.com",
  messagingSenderId: "942304564009",
  appId: "1:942304564009:web:f417c47a3908a9ff8c9d38",
  measurementId: "G-BLPFRY0QZJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth, app };