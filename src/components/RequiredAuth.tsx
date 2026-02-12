import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuth = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // Redirect to login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequiredAuth;
