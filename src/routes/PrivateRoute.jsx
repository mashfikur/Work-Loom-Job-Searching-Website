import PropTypes from "prop-types";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  const path = location.pathname;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  if (path.includes("/job")) {
    toast.error("You have to login first to view Details");
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
