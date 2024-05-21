"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import TitleCard from "./editorComponents/FormComponents/TitleCard";
import ArrowDown from "./ArrowDown";

import Block from "./editorComponents/FormComponents/Block";
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
          <div className="grid flex-col rounded-lg items-center overflow-visible">
            <Block
              {...{
                id: "3",
                component: "button",
                style: { width: "200px", backgroundColor: "#ffb70f" },
                content: "Go to the website editor",
                redirectTo: "/editor",
              }}
            />
          </div>
          <TitleCard
            content=""
            items={[
              {
                content: "Yes, absolutely",
                cardImgSrc:
                  "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                cardRoute: "/intro",
              },
              {
                content: "Learn More",
                cardImgSrc:
                  "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
