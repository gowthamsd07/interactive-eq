import React, { useEffect, useState } from "react";

import "./MainHeader.scss";

const MainHeader = (props) => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const HeaderClass = visible ? "visible" : "hidden";

  return (
    <header className={`main-header ${HeaderClass}`}>{props.children}</header>
  );
};

export default MainHeader;
