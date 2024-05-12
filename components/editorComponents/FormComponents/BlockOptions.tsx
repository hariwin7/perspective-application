import React from "react";
import { Copy, DotsSixVertical, Trash } from "@phosphor-icons/react";
import useEditorStore from "@/store/editorStore";
import { nanoid } from "nanoid";

const BlockOptions = () => {
  const editorConfig = useEditorStore((state) => state.editorConfig);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);
  const currentSelection = useEditorStore((state) => state.currentSelection);

  const handleDelete = () => {
    const listWithoutCurrentBlock = editorConfig.filter(
      (config) => config.id !== currentSelection
    );
    setEditorConfig(listWithoutCurrentBlock);
  };

  const handleCopy = () => {
    const editorConfigCopy = [...editorConfig];
    const currentItemIndex = editorConfig.findIndex(
      (config) => config.id === currentSelection
    );
    editorConfigCopy.splice(currentItemIndex + 1, 0, {
      ...editorConfig[currentItemIndex],
      id: nanoid(),
    });
    setEditorConfig(editorConfigCopy);
  };

  return (
    <div className="absolute right-[-50px]">
      <div className="flex flex-col p-2 bg-white rounded-lg drop-shadow-md gap-4">
        <DotsSixVertical
          size={22}
          color="#cecece"
          className="hover:scale-110 cursor-pointer"
        />
        <hr />
        <Trash
          size={22}
          color="#c90d0d"
          className="hover:scale-110 cursor-pointer"
          onClick={handleDelete}
        />
        <hr />
        <Copy
          size={22}
          color="#cecece"
          className="hover:scale-110 cursor-pointer"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
};

export default BlockOptions;
