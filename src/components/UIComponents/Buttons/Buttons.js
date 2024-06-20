import React from "react";
import { Link } from "react-router-dom";

import "./Buttons.scss";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.primary && "button--primary"
        } ${props.secondary && "button--secondary"} ${
          props.secondary && "button--tertiary"
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} ${
          props.primary && "button--primary"
        } ${props.secondary && "button--secondary"} ${
          props.tertiary && "button--tertiary"
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.primary && "button--primary"
      } ${props.secondary && "button--secondary"} ${
        props.tertiary && "button--tertiary"
      }`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
