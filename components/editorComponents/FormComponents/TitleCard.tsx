import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MaincomponentProp as Prop } from "@/types/editorTypes";

const TitleCard = ({ items }: Prop) => {
  return (
    <div className="flex gap-4 justify-center mt-6 p-2">
      {items?.map((item, index) => (
        <div
          className="flex flex-col hover:scale-105 transition ease-in-out delay-150 cursor-pointer "
          key={index}
        >
          <Link className="rounded-t-md relative" href={item?.cardRoute || ""}>
            <Image
              src={item.cardImgSrc}
              alt="yes absolutely"
              height={100}
              width={100}
              className="rounded-t-md w-[212px] flex flex-1"
            ></Image>
          </Link>
          <div className="bg-yellow-button text-white h-14 rounded-b-md flex justify-center items-center">
            {item.cardText}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleCard;
