import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC2sRjxJuCiU8qDEFrfpK36mzjQFFtKIzM",
  authDomain: "yabao-5edb7.firebaseapp.com",
  projectId: "yabao-5edb7",
  storageBucket: "yabao-5edb7.appspot.com",
  messagingSenderId: "600816184965",
  appId: "1:600816184965:web:98a35642253c676a48c3ec"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)