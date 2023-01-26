
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABnGistRcB7JJs2FLbCdE0SP1D6HZtQg8",
  authDomain: "ask4help-75501.firebaseapp.com",
  projectId: "ask4help-75501",
  storageBucket: "ask4help-75501.appspot.com",
  messagingSenderId: "337651113956",
  appId: "1:337651113956:web:a6ab1a6f69b72a7e6571f1",
  measurementId: "G-QF4F1ZVHSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
