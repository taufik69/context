import React, { useContext, useDebugValue } from "react";
import { AuthContext } from "../context/AuthContext";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth ? `Logged in as ${auth.user}` : "Not logged in"
  );
  return auth;
};

export default UseAuth;
