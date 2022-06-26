// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC3_Kn3RpbUEKvZ147svqzewWkTI7pYt1k",
  authDomain: "test-407d1.firebaseapp.com",
  projectId: "test-407d1",
  storageBucket: "test-407d1.appspot.com",
  messagingSenderId: "439282176799",
  appId: "1:439282176799:web:3b931f6459f2bdbf38962a",
  measurementId: "G-3V1M676HFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
