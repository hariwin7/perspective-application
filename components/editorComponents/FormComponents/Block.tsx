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
      return <Navbar style={style} imgSrc={content} />;

    case "iframeembed":
      return (
        <EmbedComponent style={style} iframeSrc={content} renderIn={renderIn} />
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
}: Props) => {
  return getComponent({
    component,
    element,
    className,
    content,
    style,
    items,
    renderIn,
  });
};

export default Block;
