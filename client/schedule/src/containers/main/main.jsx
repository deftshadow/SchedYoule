import React, { useEffect, useState } from "react";
import Days from "../Days/days";
import AuthForm from "../../components/auth-form/auth-form";
import UserService from "../../service/userService";
import RegisterForm from "../../components/register-form/register-form";

const Main = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [form, setForm] = useState(false);
  const formContent = form ? (
    <RegisterForm
      isAuthorized={isAuthorized}
      success={() => setForm(false)}
      changeForm={() => setForm(false)}
    />
  ) : (
    <AuthForm
      isAuthorized={isAuthorized}
      success={setIsAuthorized}
      changeForm={() => setForm(true)}
    />
  );

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     const id = UserService.getUserId(setIsAuthorized);
  //     if (window.userId) {
  //       console.log(window.userId)
  //       // window.userId = id;
  //       setIsAuthorized(true);
  //     }
  //   }
  // }, [isAuthorized]);

  useEffect(() => {
    const id = UserService.getUserId(setIsAuthorized);
    if (window.userId) {
      console.log(window.userId)
      // window.userId = id;
      setIsAuthorized(true);
    }
  }, []);

  return (
    <>
      {formContent}
      {isAuthorized ? <Days /> : null}
    </>
  );
};

export default Main;
