import React, { useEffect } from "react";
import Post from "../../components/posts/Post";
import { useAppDispatch, useAppSelector, getAllPosts } from "../../redux";

function AllPost() {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      await dispatch(getAllPosts());
      setLoading(false);
    }
    getPosts();
  }, [dispatch]);
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.loading);

  //TODO the logged user should be able to delete or update a post
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto w-7/12 max-w-5xl px-3">
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Here the post you can read
      </h1>
      <div className=" ">
        {Array.isArray(posts) &&
          posts.map((post) => {
            return (
              <Post
                // @ts-ignore
                key={post.title}
                // @ts-ignore
                title={post.title}
                // @ts-ignore
                content={post.content}
                // @ts-ignore
                id={post.id}
                // @ts-ignore
                author={post.user}
                loading={isLoading}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllPost;
