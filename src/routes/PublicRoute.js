import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
};
export default PublicRoute;
