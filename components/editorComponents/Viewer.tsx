import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import Block from "@/components/editorComponents/FormComponents/Block";
import useEditorStore from "@/store/editorStore";

interface Props {
  desktop: boolean;
}

const Viewer = ({ desktop }: Props) => {
  const editorConfig = useEditorStore((state) => state.editorConfig);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);

  const currentSelection = useEditorStore((state) => state.currentSelection);
  const setCurrentSelection = useEditorStore(
    (state) => state.setCurrentSelection
  );

  const editMode = useEditorStore((state) => state.editMode);

  const className = `h-full bg-white drop-shadow-2xl  justify-self-center p-2 flex justify-center rounded-lg ${
    desktop ? " w-[1020px]" : " w-[375px]"
  } bg-[#F4F4F7]`;
  const reOrderClassname =
    "flex flex-col rounded-lg items-center overflow-visible";

  return (
    <div className={className}>
      <div
        className={`flex  flex-col items-center min-h-[667px] ${
          desktop ? "w-[700px]" : ""
        }`}
      >
        {editMode ? (
          <Reorder.Group
            axis="y"
            values={editorConfig}
            onReorder={setEditorConfig}
            className={reOrderClassname}
          >
            {editorConfig.map((item) => (
              <Reorder.Item key={item.id} value={item}>
                <div
                  className={`outline-primary-blue hover:outline-dashed cursor-pointer ${
                    currentSelection === item.id && "outline"
                  }`}
                  onClick={() => setCurrentSelection(item.id)}
                >
                  <Block {...item} key={item.id} />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          <div className={reOrderClassname}>
            {editorConfig.map((item) => (
              <Block {...item} key={item.id} />
            ))}
          </div>
        )}
        {editMode && (
          <button className="rounded-full bg-white w-10 h-10 text-center justify-center flex items-center drop-shadow-2xl m-10 hover:scale-125 justify-self-center self-center">
            <Plus size={22} color="#cecece" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Viewer;
