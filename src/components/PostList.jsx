import React from "react";
import Post from "./Post";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, title, removePost }) {
  // const [posts, setPosts] = useState([
  //   { id: 1, title: "Life is life", body: "Description body" },
  //   { id: 2, title: "Life is life1", body: "Description body" },
  //   { id: 3, title: "Life is life2", body: "Description body" },
  // ]);

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No posts</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((item) => {
          return (
            <CSSTransition key={item.id} timeout={500} classNames='post' >
              <Post removePost={removePost} post={item}  />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
