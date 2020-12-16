import React, { useRef } from "react";

import "./backdrop.css";

const Backdrop = ({ show, canceled }) =>
{
  return show ? <div className='backdrop' onClick={canceled}></div> : null;
}

export default Backdrop;