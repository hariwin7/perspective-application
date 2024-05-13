import React from "react";
import { EmbedComponentProp as Props } from "@/types/editorTypes";

const EmbedComponent = ({ iframeSrc, className, style, renderIn }: Props) => {
  return (
    <div className={`p-2 ${renderIn === "page" ? "md:px-[20%]" : ""}`}>
      <div
        className={`relative w-[100%] h-[100%] pt-[56.25%] ${className}`}
        style={style}
      >
        <iframe
          className="absolute top-0 left-0  w-[100%] h-[100%] border-none"
          title="Video Resume"
          allowFullScreen
          src={iframeSrc}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedComponent;
