import React, { useState } from "react";
import "./Loader.scss";
import Brandlogo from "../../../assets/images/shared/header-logo.svg";

function LoaderComponent() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const loaderClass = isLoading ? "" : "page-loaded";
  return (
    <div className={`loader ${loaderClass}`}>
      <img src={Brandlogo} alt="brand-logo" />
    </div>
  );
}

export default LoaderComponent;
