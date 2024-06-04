import React from "react";

import "./MainFooter.scss";

const MainFooter = (props) => {
  return <footer className="main-footer">{props.children}</footer>;
};

export default MainFooter;
