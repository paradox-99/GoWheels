import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey:"AIzaSyCJNcZIvssBlfXVoE2sY41z6mrN79yuakM",
    authDomain:"gowheels-99.firebaseapp.com",
    projectId:"gowheels-99",
    storageBucket:"gowheels-99.appspot.com",
    messagingSenderId:"882993135704",
    appId:"1:882993135704:web:79eb95486dcd5628c6ca2d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



