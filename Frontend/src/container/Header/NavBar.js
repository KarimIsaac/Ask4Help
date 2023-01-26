import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './NavBar.css'; 
import Home from "../Home/Home";
import CreatePost from "../../components/CreatePost/CreatePost";
import Login from "../../components/Login/Login";
import { auth } from "../../components/Login/firebase-config"
import { signOut } from 'firebase/auth';

function NavBar() {
  const [isAuth, setIsAuth] = useState(false);
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      window.location.pathname ="/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? ( 
          <Link to="/login">Login</Link> 
        ) : ( 
          <button className='sign-out-btn' type='button' onClick={signUserOut}>Log out</button>
        )}
        <Link to="/createpost">Create Post</Link>
      </nav>

      <Routes>
      
     
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default NavBar;