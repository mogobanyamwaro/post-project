import React from "react";
import { useAppDispatch, deletepost } from "../../redux";

const jwt = require("jsonwebtoken");
interface Iprops {
  title: string;
  content: string;
  id: string | number;
  author: string | number;
  loading: boolean;
}
function Post(props: Iprops) {
  const token = localStorage.getItem("_id") ? localStorage.getItem("_id") : "";
  const dispatch = useAppDispatch();
  const user = jwt.decode(token);
  const { title, content } = props;
  const handleDeletePost = async () => {
    await dispatch(deletepost(props.id));
  };
  return (
    <div className="my-5">
      <h1 className="text-md font-bold text-gray-900">{title}</h1>
      <p className="text-gray-700">{content}</p>
      <div className=" flex justify-between">
        <button className="rounded bg-blue-500 py-2 px-4 text-sm font-bold text-white hover:bg-blue-700">
          Edit
        </button>
        <button
          type="button"
          onClick={handleDeletePost}
          className="cursor-pointer rounded bg-red-500 py-2 px-4 text-sm font-bold text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
