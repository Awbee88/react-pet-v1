import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/btn/MyButton";
import { AuthContext } from "../context";

export default function () {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    console.log(isAuth);
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <form
        onSubmit={login}
        style={{ margin: "30px auto", maxWidth: "500px" }}
      >
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>In</MyButton>
      </form>
    </div>
  );
}
