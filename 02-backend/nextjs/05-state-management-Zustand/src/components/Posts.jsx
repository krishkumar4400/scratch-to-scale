import React, { useEffect } from "react";
import { usePostsStore } from "../store/postStore.js";

const Posts = () => {
  const { posts, fetchPosts, loading, error } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return (
      <>
        <h1>Error...</h1>
        <h2>{error}</h2>
      </>
    );
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
