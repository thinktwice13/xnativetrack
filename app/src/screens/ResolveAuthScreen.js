import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";

export default () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};
