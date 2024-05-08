import React, { createElement } from "react";

interface Props {
  element: string;
  className: string;
  content: string;
}
const Block = ({ element, className, content }: Props) => {
  return createElement(element, { className }, content);
};

export default Block;
