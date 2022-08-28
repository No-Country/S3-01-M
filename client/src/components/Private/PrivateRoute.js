import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = (children) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? <div>{children.children}</div> : <LoadingToRedirect />;
};
export default PrivateRoute;
