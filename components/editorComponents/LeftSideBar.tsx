"use client";
import React from "react";
import BlocksList from "./SideBarComponents/BlocksList";
import TextConfig from "./SideBarComponents/TextConfig";
import useEditorStore from "@/store/editorStore";
import { sideBarType } from "@/constants/components";

const LeftSideBar = () => {
  const currentSideBarComponent = useEditorStore(
    (state) => state.currentSideBarComponent
  );

  const getSideBarComponent = () => {
    switch (currentSideBarComponent) {
      case sideBarType.addBlock:
        return <BlocksList />;
      case sideBarType.blockElement:
        return <TextConfig />;
    }
  };

  return (
    <div className="flex md:w-[280px] drop-shadow-xl mt-[3px] bg-white h-full">
      {currentSideBarComponent}
      {getSideBarComponent()}
    </div>
  );
};

export default LeftSideBar;
