import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const EditorLayout = ({ children }: Props) => {
  return <div className="flex bg-editor-gray w-full">{children}</div>;
};

export default EditorLayout;
