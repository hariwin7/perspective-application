"use client";
import React from "react";
import { nanoid } from "nanoid";
import { blocks, sideBarType } from "@/constants/components";
import useEditorStore from "@/store/editorStore";
import { BlockConfigType } from "@/types/editorTypes";

const BlocksList = () => {
  const editorConfig = useEditorStore((state) => state.editorConfig);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);

  const setCurrentSelection = useEditorStore(
    (state) => state.setCurrentSelection
  );

  const setCurrentSideBarComponent = useEditorStore(
    (state) => state.setCurrentSideBarComponent
  );

  const handleAddBlock = (block: BlockConfigType) => {
    const id = nanoid();
    setEditorConfig([...editorConfig, { id, ...block.defaultConfig }]);
    setCurrentSelection(id);
    setCurrentSideBarComponent(sideBarType.blockElement);
  };

  return (
    <div className="flex flex-col m-4 gap-4 w-full">
      <h1 className="text-xl font-semibold p-2 py-4">Add new block</h1>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="bg-[#FDFEF4] rounded p-2 w-full cursor-pointer flex flex-col"
          onClick={() => handleAddBlock(block)}
        >
          {block?.blockDiv()}
          <div className="font-semibold text-center mt-4 text-[#5B5D61]">
            {block.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlocksList;
