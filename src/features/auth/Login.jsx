import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "./authSlice";

function Login() {
  const dispatch = useAppDispatch();
  const handleLogin = () => {

    dispatch(
      login({
        user: {
          id: 1,
          name: "John",
          email: "john@gmail.com",
        },
        token: "ABC123",
      })

    );

  };

  return (

    <button onClick={handleLogin}>
      Login
    </button>

  );

}

export default Login;