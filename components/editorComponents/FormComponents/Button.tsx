import React from "react";
import { ButtonProp as Props } from "@/types/editorTypes";
import Link from "next/link";

const Button = ({ className, content, redirectTo, style }: Props) => {
  return (
    <Link
      href={redirectTo || ""}
      className={`bg-[#ffb70f] text-white p-2 text-sm capitalize rounded-lg drop-shadow-sm hover:bg-[#ffb70f] w-full m-4 justify-self-center ${className}`}
      style={style}
    >
      <button className="flex text-center justify-center items-center w-full">
        {content}
      </button>
    </Link>
  );
};

export default Button;
