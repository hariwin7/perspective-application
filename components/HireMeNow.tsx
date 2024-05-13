"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import TitleCard from "./editorComponents/FormComponents/TitleCard";
import ArrowDown from "./ArrowDown";
const HireMeNow = () => {
  return (
    <div className="w-full border-box pt-4 pl-8 pr-8 pb-6">
      <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
        <div className="transition-wrapper">
          <div className="wrapper break-words text-center">
            <h2 className="text-2xl md:text-4xl leading-9 font-semibold">
              Curious about how I can support your company&apos;s growth as a
              <TypeAnimation
                sequence={[
                  " Frontend Developer",
                  1000,
                  " Backend Developer",
                  1000,
                  " Full Stack Developer",
                  1000,
                ]}
                speed={30}
                repeat={Infinity}
              />
              ?
            </h2>
            <h2>
              <br />
            </h2>
            <h4 className="font-extralight">
              📍 Remote 🚀 as of now ⏰ Full-time
            </h4>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl mt-6">
        <div className="w-full border-box pb-6">
          <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl pt-6">
            <div className="transition-wrapper">
              <div className="wrapper break-words text-center">
                <h4 className="font-extralight">Hire me now as</h4>
                <h3 className="text-2xl font-semibold">
                  <TypeAnimation
                    sequence={[
                      " Frontend Developer",
                      1000,
                      " Backend Developer",
                      1000,
                      " Full Stack Developer",
                      1000,
                    ]}
                    speed={30}
                    repeat={Infinity}
                  />
                </h3>
              </div>
            </div>
          </div>
          <TitleCard
            content=""
            items={[
              {
                content: "Yes, absolutely",
                cardImgSrc:
                  "https://perspective.imgix.net/6019615ddf56ee001f39be7f.png?auto=compress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.51&fp-y=0.50&fp-z=1&h=480&ar=1.3333333333333333&dpr=2",
                cardRoute: "/intro",
              },
              {
                content: "Learn More",
                cardImgSrc:
                  "https://perspective.imgix.net/601961b3e2bbda001f253741.png?ixlib=js-2.3.2&auto=format%2Ccompress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.50&fp-y=0.50&fp-z=1&h=480&q=80&ar=1.3333333333333333&dpr=2",
              },
            ]}
          />
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HireMeNow;
