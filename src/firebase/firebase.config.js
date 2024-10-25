import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDU1CYMmDPa2S3GSWe_Bl0OJXlRoUuPzM4",
    authDomain: "gowheels-6692a.firebaseapp.com",
    projectId: "gowheels-6692a",
    storageBucket: "gowheels-6692a.appspot.com",
    messagingSenderId: "654497080741",
    appId: "1:654497080741:web:34432e9b666e8c9b86344c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



