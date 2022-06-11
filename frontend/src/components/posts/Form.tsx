import React, { useState } from "react";
import { createpost, useAppDispatch, useAppSelector } from "../../redux";

interface Iprops {
  isUpdating?: boolean;
  prevTitle?: string;
  prevContent?: string;
}

function Form(props: Iprops) {
  const dispatch = useAppDispatch();
  const { isUpdating, prevTitle, prevContent } = props;
  const [post, setPost] = useState({
    title: isUpdating ? prevTitle : "",
    content: isUpdating ? prevContent : "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(createpost(post));
    } catch (error) {
      console.log(error);
    }
  };
  const state = useAppSelector((state) => state);
  console.log(state.posts);
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm ">
        <div className="py-2">
          <label htmlFor="title" className="sr-only">
            Title of the post
          </label>
          <input
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            type="text"
            required
            className="relative block 
            w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 
            text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500
             focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Title of the post"
          />
        </div>
      </div>
      <div className="-space-y-px rounded-md shadow-sm">
        <div className="py-2">
          <label htmlFor="content" className="sr-only">
            content of the post
          </label>
          <textarea
            id="content"
            rows={4}
            name="content"
            value={post.content}
            onChange={handleTextAreaChange}
            className="relative block 
            w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 
            text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500
             focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Your content..."
          ></textarea>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          {isUpdating ? "update post" : "create post"}
        </button>
      </div>
    </form>
  );
}

export default Form;
