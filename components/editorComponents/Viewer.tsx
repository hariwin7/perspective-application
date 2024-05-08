import React, { useState } from "react";
import { Reorder } from "framer-motion";
import Block from "@/components/editorComponents/FormComponents/Block";
import useEditorStore from "@/store/editorStore";

interface Props {
  desktop: boolean;
}

const Viewer = ({ desktop }: Props) => {
  const editorConfig = useEditorStore((state) => state.editorConfig);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);

  const className = `min-h-[667px] h-full bg-white drop-shadow-2xl overflow-y-scroll justify-self-center p-2 ${
    desktop ? " w-[1020px]" : " w-[375px]"
  }`;
  const reOrderClassname =
    "flex flex-col rounded-lg items-center  overflow-visible";
  return (
    <div className={className}>
      <Reorder.Group
        axis="y"
        values={editorConfig}
        onReorder={setEditorConfig}
        className={reOrderClassname}
      >
        {editorConfig.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <div className="outline-primary-blue hover:outline-dashed cursor-pointer">
              <Block {...item} key={item.id} />
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Viewer;
