import axios from "axios";
import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
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
  const [modal, setModal] = useState(false);

  const sortedAndSearcedposts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      \<MyButton onClick={fetchPosts}>Получить посты</MyButton>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearcedposts}
        title="Post List One"
      />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
    </div>
  );
}

export default App;
