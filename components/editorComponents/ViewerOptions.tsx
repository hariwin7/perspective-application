import React from "react";
import { ArrowUUpLeft, ArrowUUpRight, Monitor } from "@phosphor-icons/react";

interface Props {
  desktop: boolean;
  setDeskop: (arg: boolean) => void;
}

const ViewerOptions = ({ setDeskop, desktop }: Props) => {
  return (
    <div className="absolute bottom-10 right-10 ">
      <div className="flex flex-col p-2 bg-white rounded-lg drop-shadow-md gap-4">
        <Monitor
          size={22}
          color="#cecece"
          className="hover:scale-110 cursor-pointer"
          onClick={() => setDeskop(!desktop)}
        />
        <hr />
        <ArrowUUpLeft
          size={22}
          color="#cecece"
          className="hover:scale-110 cursor-pointer"
        />
        <ArrowUUpRight
          size={22}
          color="#cecece"
          className="hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ViewerOptions;
