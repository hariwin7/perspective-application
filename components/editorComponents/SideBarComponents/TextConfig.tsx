"use client";
import useEditorStore from "@/store/editorStore";
import React from "react";

const TextConfig = () => {
  const currentSelection = useEditorStore((state) => state.currentSelection);
  const editorConfig = useEditorStore((state) => state.editorConfig);

  const currentBlockElement = editorConfig.find(
    (item) => item.id === currentSelection
  );

  return <div>{JSON.stringify(currentBlockElement)}</div>;
};

export default TextConfig;
