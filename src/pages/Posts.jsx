import { useState, useMemo, useEffect, useRef } from "react";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import MyButton from "../components/UI/btn/MyButton";
import { usePosts } from "../hooks/usePosts";
import { getPosts } from "../api/postService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await getPosts(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="app">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} lastPostId={posts.length}></PostForm>
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Elements count on page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Show all" },
        ]}
      ></MySelect>
      {postsError && <h1>Ups Error... {postsError}</h1>}
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts list 1"
      />
      <div
        ref={lastElement}
        style={{ height: "10px", background: "teal" }}
      ></div>
      {isPostsLoading && <Loader />}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default Posts;
