import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/notfound/NotFound";
import AllPost from "../pages/posts/AllPost";
import CreatePost from "../pages/posts/CreatePost";
import UpdatePost from "../pages/posts/UpdatePost";
import CreateProfile from "../pages/Profile/CreateProfile";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import ViewProfile from "../pages/Profile/ViewProfile";
import { PrivateRoute } from "./PrivateRoute";

export const routes = (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/posts" element={<AllPost />} />
      <Route path="/update-post/:id" element={<UpdatePost />} />
      <Route path="/profile" element={<ViewProfile />} />
      <Route path="/edit-profile" element={<UpdateProfile />} />
      <Route path="/create-profile" element={<CreateProfile />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
