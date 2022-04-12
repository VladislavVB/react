import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });
  const addNewPosts = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <div>
      <form className="form">
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
          type="text"
          placeholder="Title printsyka"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          required
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPosts}>Add</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
