import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header bg-black text-white drop-shadow-lg">{props.children}</header>;
};

export default MainHeader;
