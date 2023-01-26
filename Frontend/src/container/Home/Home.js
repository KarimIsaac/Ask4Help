import React, { useEffect, useState } from 'react'
import { auth, db } from "../../components/Login/firebase-config"
import {getDocs, collection, deleteDoc, doc} from "firebase/firestore";

function  Home(isAuth)  {
  const [postLists, setPostLists] = useState([]);
  const postCollection = collection(db,"post")
  useEffect(() => {
    const getPosts = async () => {
    
      const data = await postCollection.get()
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getPosts();
  }, [deletePost])

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postLists.map((post) => (
        <div className="postheader">
          <div className="post"> 
            <h1>{post.title}</h1>
            <div className="deletPost">
              {isAuth && post.author.id === auth.currentUser.uui &&   
              <button onClick={() => deletePost(post.id)}>
                
                X</button>
            } 
              </div>
            <div className="postTextContainer"> {post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
