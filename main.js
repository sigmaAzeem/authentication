
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDQARw0S7xZYZyZtAWfLpDVn2Q_Sep7Jgg",
    authDomain: "l-authentication.firebaseapp.com",
    projectId: "l-authentication",

    storageBucket: "l-authentication.firebasestorage.app",
    messagingSenderId: "191598927367",
    appId: "1:191598927367:web:09b1ada234686da74394a2",
    measurementId: "G-KYG8ZVWE3J"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

signInWithPopup(auth, provider)
    .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

    }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

    });