import React from "react";
import type { Metadata } from "next";

import EditorCanvas from "../../components/editorComponents/EditorCanvas";
import LeftSideBar from "../../components/editorComponents/LeftSideBar";
import EditorLayout from "../../components/editorComponents/EditorLayout";

export const metadata: Metadata = {
  title: "Build your webpage",
  description: "Application to build your webpage",
};

const page = () => {
  return (
    <EditorLayout>
      <LeftSideBar />
      <EditorCanvas />
    </EditorLayout>
  );
};

export default page;
