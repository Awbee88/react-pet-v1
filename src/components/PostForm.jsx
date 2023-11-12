import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/btn/MyButton";

export default function PostForm({create, lastPostId}) {
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    // setPosts([...posts, { ...post, id: posts.length + 1 }]);
    create({ ...post, id: lastPostId + 1 });

    setPost({
      id: "",
      title: "",
      body: "",
    });
  }

  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Title"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description"
      />
      <MyButton>Add</MyButton>
    </form>
  );
}
