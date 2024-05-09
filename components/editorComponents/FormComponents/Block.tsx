import React, { createElement } from "react";
import Text from "./Text";
import Button from "./Button";
import TitleCard from "./TitleCard";

import { BlockProp as Props } from "@/types/editorTypes";
import Navbar from "@/components/editorComponents/Navbar";

const getComponent = ({
  component,
  element,
  className,
  content,
  style,
  items,
}: Props) => {
  switch (component.toLowerCase()) {
    case "text":
      return (
        <Text
          className={className}
          content={content}
          element={element}
          style={style}
        />
      );
    case "button":
      return <Button className={className} content={content} style={style} />;
    case "imagecard":
      return (
        <TitleCard
          className={className}
          content={content}
          style={style}
          items={items}
        />
      );
    case "navbar":
      return <Navbar />;
  }
};

const Block = ({
  component,
  element,
  className,
  content,
  style,
  items,
}: Props) => {
  return getComponent({ component, element, className, content, style, items });
};

export default Block;
