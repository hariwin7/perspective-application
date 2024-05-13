import React, { createElement } from "react";
import Text from "./Text";
import Button from "./Button";
import TitleCard from "./TitleCard";

import { BlockProp as Prop } from "@/types/editorTypes";
import Navbar from "@/components/editorComponents/Navbar";
import EmbedComponent from "./EmbedComponent";

interface Props extends Prop {
  renderIn?: string;
}

const getComponent = ({
  component,
  element,
  className,
  content,
  style,
  items,
  renderIn,
  ...rest
}: Props) => {
  if (!component) return <></>;

  switch (component.toLowerCase()) {
    case "text":
      return (
        <Text
          className={className}
          content={content}
          element={element}
          style={style}
          {...rest}
        />
      );
    case "button":
      return (
        <Button
          className={className}
          content={content}
          style={style}
          {...rest}
        />
      );
    case "imagecard":
      return (
        <TitleCard
          className={className}
          content={content}
          style={style}
          items={items}
          {...rest}
        />
      );
    case "navbar":
      return <Navbar style={style} imgSrc={content} />;

    case "iframeembed":
      return (
        <EmbedComponent
          style={style}
          iframeSrc={content}
          renderIn={renderIn}
          {...rest}
        />
      );
  }
};

const Block = ({
  component,
  element,
  className,
  content,
  style,
  items,
  renderIn,
  ...rest
}: Props) => {
  return getComponent({
    component,
    element,
    className,
    content,
    style,
    items,
    renderIn,
    ...rest,
  });
};

export default Block;
