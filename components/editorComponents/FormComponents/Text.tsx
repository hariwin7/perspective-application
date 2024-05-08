import React, { createElement } from "react";

interface Props {
  element: string;
  className: string;
  content: string;
}
const Text = ({ element, className, content }: Props) => {
  return createElement(element, { className }, content);
};

export default Text;
