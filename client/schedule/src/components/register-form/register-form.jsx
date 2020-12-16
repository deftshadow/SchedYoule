import React, { useState } from "react";
import classes from "./register-form.module.css";
import Modal from "../UI/modal/modal";
import UserService from "../../service/userService";

const RegisterForm = ({ isAuthorized, changeForm, success }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mistake, setMistake] = useState("");
  const errorMessage = <div className={classes.ErrorMessage}>{mistake}</div>

  const resetHandler = () => {
    setUsername("");
    setPassword("");
  };

  const submitSignUpHandler = async () => {
    const error = await UserService.submitSignUpHandler(username, password, success);
    if (error) {
      setMistake(error);
      resetHandler();
    } else {
      resetHandler();
    }
  }

  return (
    <Modal show={!isAuthorized}>
      <span className={classes.Title}>SignUp</span>
      <i className={"far fa-id-card"} style={{ fontSize: "64px" }}></i>
      <div className={classes.Container}>
        {errorMessage}
        <label>Username</label>
        <input
          className={classes.Type}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          minLength={6}
          maxLength={30}
        />
        <label>Password</label>
        <input
          className={classes.Type}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          minLength={6}
          maxLength={30}
        />
        <button
          className={classes.Button}
          type="submit"
          onClick={submitSignUpHandler}
        >
          Submit
        </button>
        <div className={classes.Log}>
          Already have an account?
          <button className={classes.LogBtn} onClick={changeForm}>
            LogIn
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterForm;
