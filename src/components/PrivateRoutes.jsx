import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const auth = useAuth();

  console.log(auth?.user);

  return <h1>Hello world</h1>;

  //   return auth?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
