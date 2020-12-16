import React, { useState } from "react";
import classes from "./auth-form.module.css";
import Modal from "../UI/modal/modal";
import UserService from "../../service/userService";

const AuthForm = ({ isAuthorized, canceled, success, changeForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mistake, setMistake] = useState("");
  let errorMessage = <div className={classes.ErrorMessage}>{mistake}</div>

  const resetHandler = () => {
    setUsername("");
    setPassword("");
  };

  const submitLogInHandler = async () => {
    const error = await UserService.submitLogInHandler(username, password, success);
    if (error) {
      setMistake(error);
      resetHandler();
    } else {
      resetHandler();
    }
  };

  return (
    <Modal show={!isAuthorized}>
      <span className={classes.Log}>LogIn</span>
      <i className={"fas fa-user-shield"} style={{ fontSize: "64px" }}></i>
      <div className={classes.Container}>
        {errorMessage}
        <label>Username</label>
        <input
          className={classes.Type}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          minLength={6}
          maxLength={30}
        />
        <label>Password</label>
        <input
          className={classes.Type}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          minLength={6}
          maxLength={30}
        />
        <button
          className={classes.Button}
          type="submit"
          onClick={submitLogInHandler}
        >
          Submit
        </button>
      </div>
      <div className={classes.Sign}>
        Don't have an account?
        <button className={classes.SignBtn} onClick={changeForm}>
          SignUp
        </button>
      </div>
    </Modal>
  );
};

export default AuthForm;
