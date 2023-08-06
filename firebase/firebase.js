import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBb4xH0qXZcTG2SnuTYpQxl22vZpznCVqA",
  authDomain: "fir-todo-app-1e3c5.firebaseapp.com",
  projectId: "fir-todo-app-1e3c5",
  storageBucket: "fir-todo-app-1e3c5.appspot.com",
  messagingSenderId: "302248406380",
  appId: "1:302248406380:web:0ea4ea2248835dde9f1749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);