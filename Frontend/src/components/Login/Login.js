import './Login.css';
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut   } from "firebase/auth";
import { useState } from 'react';
import app from "./firebase-config";
import {useNavigate} from "react-router-dom"


function Login () {
  const auth = getAuth(app);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate();
  const signIn = () =>{   
  
  
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("./")
      alert("succes signIn")
    
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
      // ..
    });
}

const signUp = () => {    
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("CreateUser a account")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
    // ..
  });
}


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  return (
    <div className='Sign-Google'>
        <h1>SignIn with Email</h1>
        <input type={"email"} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type={"password"} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signUp}>SignUp</button>
        <button onClick={signIn}>SignIn</button>
    </div>
  )
}

export default Login;