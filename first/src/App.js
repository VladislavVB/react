import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/app.css";

function App() {  
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "Descp " },
    { id: 2, title: "JS2", body: "Descp " },
    { id: 3, title: "JS3", body: "Descp " },
    { id: 4, title: "JS4", body: "Descp " },
    { id: 5, title: "JS5", body: "Descp " },
  ]);

  const [post, setPost] = useState({title: '', description: ''});


  const addNewPosts = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', description: ''})
  };

  return (
    <div className="App">
      <form className="form">
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          required
          type="text"
          placeholder="Title printsyka"
        />
        <MyInput
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}

          required
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPosts}>Add</MyButton>
      </form>
      <PostList posts={posts} title="Post List One" />
    </div>
  );
}

export default App;
