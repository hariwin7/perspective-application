import React from "react";

const intro = () => {
  return (
    <div className="break-words text-center  border-box pt-4 pl-8 pr-8 pb-4 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
      <h2 className="text-2xl md:text-4xl leading-9 font-semibold">
        I would like to briefly introduce myself to you. 👋
      </h2>
      <div className="break-words text-center w-full border-box pt-8 pl-8 pr-8 pb-8 mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <h4 className="font-extralight">
          Here&apos;s is who I&apos;m in 2 mins:
        </h4>
      </div>
      <div className="flex justify-center w-full h-[150%]">
        <iframe
          className="youtube-iframe"
          frameBorder="0"
          title="Video Resume"
          allowFullScreen
          src="https://www.youtube.com/embed/Ffft2F1YeBA?controls=0&autoplay=1"
        ></iframe>
      </div>
    </div>
  );
};

export default intro;
