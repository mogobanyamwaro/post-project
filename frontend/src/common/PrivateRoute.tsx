import { Navigate, Outlet } from "react-router-dom";

export const getToken = () => {
  return localStorage.getItem("_id");
};
export const useAuth = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};
export const PrivateRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/"} />;
};
