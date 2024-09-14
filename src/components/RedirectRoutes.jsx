import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const RedirectRoutes = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/photos" />;
  }
  return children;
};

export default RedirectRoutes;
