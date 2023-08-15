import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const ProtectRoute = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const isJwtExpired = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      return true;
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (isJwtExpired(token)) {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
