import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/postService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import Post from "../components/Post";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isPostLoading, postError] = useFetching(async(id) => {
    const response = await getPostById(params.id);
    console.log(response.data);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById();
    console.log(post);
  }, []);
  return (
    <>
      <h1>Post id = {params.id}</h1>
      {postError && <h1>Ups Error... {postError}</h1>}
      {isPostLoading ? <Loader /> : <Post post={post}/>}
    </>
  );
}
