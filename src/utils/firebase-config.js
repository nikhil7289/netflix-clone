
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1a9K5MLUujP2Jcy1PNuIxDfqbivxMelM",
  authDomain: "react-netflix-clone-c1234.firebaseapp.com",
  projectId: "react-netflix-clone-c1234",
  storageBucket: "react-netflix-clone-c1234.appspot.com",
  messagingSenderId: "1072064412552",
  appId: "1:1072064412552:web:c54ebc66d148784e58d83d",
  measurementId: "G-HK7R5PSC0F"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);