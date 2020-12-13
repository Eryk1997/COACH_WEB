import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import Login from "../views/login/Login";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("trainer") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
