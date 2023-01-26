import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDp7bIoaicXRd9SnxtgEn0EtT41PG1D4vs",
    authDomain: "ask4help-ca30d.firebaseapp.com",
    projectId: "ask4help-ca30d",
    storageBucket: "ask4help-ca30d.appspot.com",
    messagingSenderId: "36356695492",
    appId: "1:36356695492:web:8bc1c2ed4aaf8acc773091",
    measurementId: "G-W4WN03913J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
