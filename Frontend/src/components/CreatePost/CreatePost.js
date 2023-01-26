import React, { useState } from "react";
import './CreatePost.css'; 
import {addDoc, collection} from 'firebase/firestore'
import {db, auth} from "../Login/firebase-config"
function CreatePost() {

const  [title, setTitle] = useState("");
const  [post, setpost] = useState("");

const postCollection = collection(db, "post")

const createPost = async() =>{
 await addDoc(postCollection,{
  title,
  post,
  
  author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid}} )
};




  return (
    <div className="Post-Page">
      <div className="create_Post_box">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input placeholder="Title..." onChange={(event) =>{
            setTitle(event.target.value);
          }
          }
            
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea placeholder="Post..." onChange={(event) =>{
            setpost(event.target.value);
          }
          } />
            <input type="file" id="img" name="img" accept="image/*"></input>
        </div>
        

        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;