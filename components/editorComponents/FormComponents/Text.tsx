import React from "react";
import { MaincomponentProp } from "@/types/editorTypes";

const getComponent = ({
  element,
  className,
  content,
  style,
}: MaincomponentProp) => {
  if (!element) return <></>;

  switch (element.toLowerCase()) {
    case "h1":
      return (
        <h1
          className={`text-4xl font-bold text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`text-2xl font-semibold text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`text-xl font-medium text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`text-lg font-normal text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`text-base font-light text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`text-sm font-extralight text-center p-2 break-word w-[100%] ${className}`}
          style={style}
        >
          {content}
        </h6>
      );
  }
};

const Text = ({ element, className, content, style }: MaincomponentProp) => {
  return getComponent({ element, className, content, style });
};

export default Text;
