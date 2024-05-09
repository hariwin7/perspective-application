import React, { createElement } from "react";
import Text from "./Text";
import Button from "./Button";

import { BlockProp as Props } from "@/types/editorTypes";

const getComponent = ({
  component,
  element,
  className,
  content,
  style,
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
  }
};

const Block = ({ component, element, className, content, style }: Props) => {
  return getComponent({ component, element, className, content, style });
};

export default Block;
