import React, { useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

import Login from "../pages/Login";
import Register from "../pages/Register";

function AuthRoute({ element, ...rest }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //   return (
  //     <Route
  //       {...rest}
  //       element={(props) => {
  //         if (user) {
  //           navigate("/");
  //           return null;
  //         } else {
  //           return <Component {...props} />;
  //         }
  //       }}
  //     />
  //   );

  // return (
  //   <Routes>
  //     {/* <Route {...rest} element={user ? <Navigate to="/" /> : element} /> */}
  //     <Route path={user ? "/" : "/login"} element={user ? <Navigate to="/" /> : <Login />} />
  //     <Route path={user ? "/" : "/register"} element={user ? <Navigate to="/" /> : <Register />} />
  //   </Routes>
  // );

  return user ?
}

export default AuthRoute;
