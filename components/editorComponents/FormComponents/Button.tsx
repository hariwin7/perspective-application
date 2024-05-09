import React from "react";
import { ButtonProp as Props } from "@/types/editorTypes";

const Button = ({ className, content, clickHandler, style }: Props) => {
  return (
    <button
      className={`bg-[#ffb70f] text-white p-2 text-sm capitalize rounded-lg drop-shadow-sm hover:bg-[#ffb70f] w-full m-4 ${className}`}
      style={style}
      onClick={clickHandler}
    >
      {content}
    </button>
  );
};

export default Button;
