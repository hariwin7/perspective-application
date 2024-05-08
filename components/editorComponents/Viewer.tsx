import React from "react";
import Text from "@/components/editorComponents/FormComponents/Text";
interface Props {
  desktop: boolean;
}
const Viewer = ({ desktop }: Props) => {
  const TEST_ELEMENT = [
    {
      id: "2",
      element: "h4",
      className: "text-sm font-thin text-center",
      content:
        "Here is my application to a dream job, without a traditional job application!",
    },
    {
      id: "1",
      element: "h1",
      className: "text-2xl font-bold mt-10  text-center",
      content:
        "Curious about your benefits as a Content Marketing Manager (m/f/d) with us?",
    },
  ];
  const className = `flex flex-col min-h-[667px] h-full bg-white drop-shadow-2xl overflow-scroll m-10 rounded-lg p-10 justify-self-center ${
    desktop ? " w-[1020px]" : " w-[375px]"
  }`;
  return (
    <div className={className}>
      {TEST_ELEMENT.map((item) => (
        <Text {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Viewer;
