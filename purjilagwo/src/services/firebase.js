import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCp7s1AL1Ss2979GjzsfJCI2y4oXVTtggQ",
    authDomain: "myproject-b3cbc.firebaseapp.com",
    projectId: "myproject-b3cbc",
    storageBucket: "myproject-b3cbc.firebasestorage.app",
    messagingSenderId: "112554286459",
    appId: "1:112554286459:web:e2b9b13ca25959740bb1de",
    measurementId: "G-6KMCVHT80K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
