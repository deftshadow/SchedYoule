import React from "react";

import Backdrop from "../backdrop/backdrop";
import "./modal.css";

const Modal = (props) => {
  if(!props.show) return null;
  return (
    <>
      <Backdrop canceled={props.canceled} show={props.show} />
      <div
        className='Modal'
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
