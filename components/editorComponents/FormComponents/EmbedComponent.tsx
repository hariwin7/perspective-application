import React from "react";

interface Props {
  iframeSrc: string | undefined;
  style: Object;
  className?: string;
  renderIn?: string;
}

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
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedComponent;
