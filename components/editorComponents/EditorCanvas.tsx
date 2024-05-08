"use client";
import React, { useState } from "react";
import Viewer from "@/components/editorComponents/Viewer";
import ViewerOptions from "@/components/editorComponents/ViewerOptions";

const EditorCanvas = () => {
  const [desktop, setDeskop] = useState(false);

  return (
    <div className="flex flex-col flex-1 w-full h-full justify-center items-center overflow-y-scroll">
      <div className="w-full h-full overflow-y-scroll md:p-10 grid mb-20">
        <Viewer desktop={desktop} />
        <ViewerOptions desktop={desktop} setDeskop={setDeskop} />
      </div>
    </div>
  );
};

export default EditorCanvas;
