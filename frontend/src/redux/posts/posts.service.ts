import axios from "axios";
import { getAuthConfig } from "../../helpers/getAuthConfig";
const URL = process.env.REACT_APP_API_URL;
const config = getAuthConfig();
const createPost = async (input: any) => {
  const res = await axios.post(`${URL}/post/create`, input, config);
  return res.data;
};

const updatePost = async (id: string, input: any) => {
  const res = await axios.put(`${URL}/post/update/${id}`, input, config);
  return res.data;
};

const deletePost = async (id: string) => {
  console.log(id, config);
  const res = await axios.post(`${URL}/post/delete/${id}`, config);
  return res.data;
};

const getAllposts = async () => {
  const res = await axios.get(`${URL}/post/all-posts`, config);
  return res.data;
};

export const PostService = {
  createPost,
  updatePost,
  deletePost,
  getAllposts,
};
