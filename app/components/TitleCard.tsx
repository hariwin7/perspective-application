import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  cardText: string;
  cardImgSrc: string;
  cardRoute?: string;
}

interface Items {
  items: Array<Item>;
}

const TitleCard = ({ items }: Items) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {items.map((item, index) => (
        <div
          className="flex flex-col hover:scale-105 transition ease-in-out delay-150 cursor-pointer"
          key={index}
        >
          <Link
            className="w-[155.5px] h-[116.63px] md:w-[212px] md:h-[159px] rounded-t-md relative"
            href={item?.cardRoute || ""}
          >
            <Image
              src={item.cardImgSrc}
              alt="yes absolutely"
              fill={true}
              className="rounded-t-md"
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
