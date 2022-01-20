// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDnS4hJPlPpByBR_6rekWdYrI9lEv3SxiE",
    authDomain: "tedorbbcom.firebaseapp.com",
    projectId: "tedorbbcom",
    storageBucket: "tedorbbcom.appspot.com",
    messagingSenderId: "809157247327",
    appId: "1:809157247327:web:8e401994db9e0b46bdb6ea",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();
export default db;

export { app };
