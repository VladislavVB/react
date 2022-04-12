import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import MyInput from "./components/UI/input/MyInput";
// import MySelect from "./components/UI/select/MySelect";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "аJS1", body: "йDescp " },
    { id: 2, title: "бJS2", body: "фDescp " },
    { id: 3, title: "вJS3", body: "яDescp " },
    { id: 4, title: "гJS4", body: "ыDescp " },
    { id: 5, title: "дJS5", body: "чDescp " },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("govno reaact");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearcedposts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearcedposts}
        title="Post List One"
      />
    </div>
  );
}

export default App;
