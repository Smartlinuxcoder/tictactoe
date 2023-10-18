// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo8AiCb9yqVnx0YmL2W_Jnf9CWzUckSBY",
    authDomain: "tic-tac-toe-1e802.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-1e802-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tic-tac-toe-1e802",
    storageBucket: "tic-tac-toe-1e802.appspot.com",
    messagingSenderId: "944176183613",
    appId: "1:944176183613:web:3c9be4a3ba8dcc439f2d54",
    measurementId: "G-65P65RR01N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
console.log("hello")
