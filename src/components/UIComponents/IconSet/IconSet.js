import React from "react";

import "./IconSet.scss";

const IconSet = (props) => {
  return (
    <div
      className={` icon-wrap-${props.bg || "default"}`}
      onClick={props.onClick}
    >
      {props.iconName === "play" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(#clip0_727_5741)">
            <path
              d="M4.78809 2.49267V13.5077C4.78972 13.5956 4.8145 13.6815 4.85993 13.7567C4.90535 13.832 4.96982 13.894 5.04683 13.9364C5.12384 13.9788 5.21067 14.0001 5.29857 13.9983C5.38646 13.9964 5.47231 13.9714 5.54746 13.9258L14.5525 8.41829C14.6244 8.37476 14.6839 8.3134 14.7252 8.24015C14.7664 8.16691 14.7881 8.08425 14.7881 8.00017C14.7881 7.91609 14.7664 7.83343 14.7252 7.76018C14.6839 7.68694 14.6244 7.62558 14.5525 7.58204L5.54746 2.07454C5.47231 2.02892 5.38646 2.00392 5.29857 2.00206C5.21067 2.00021 5.12384 2.02156 5.04683 2.06396C4.96982 2.10636 4.90535 2.16832 4.85993 2.24359C4.8145 2.31886 4.78972 2.40477 4.78809 2.49267Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_5741">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.288086)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : null}
      {props.iconName === "plus" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(#clip0_727_5744)">
            <path
              d="M2.78809 8H13.7881"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.28809 2.5V13.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_5744">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.288086)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : null}
      {props.iconName === "cross" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(#clip0_727_5748)">
            <path
              d="M13.4551 3.5L4.45508 12.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4551 12.5L4.45508 3.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_5748">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.955078)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : null}
      {props.iconName === "cross-black" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <g clipPath="url(#clip0_727_5748)">
            <path
              d="M13.4551 3.5L4.45508 12.5"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4551 12.5L4.45508 3.5"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_727_5748">
              <rect
                width="16"
                height="16"
                fill="#000"
                transform="translate(0.955078)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </div>
  );
};

export default IconSet;
