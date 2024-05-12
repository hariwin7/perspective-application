import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ style, imgSrc }: { style?: Object; imgSrc?: string }) => {
  return (
    <div
      className={`w-full p-4 border-box bg-transparent drop-shadow-md flex`}
      style={style}
    >
      <Link className="text-left" href="/">
        <Image
          alt="Logo"
          className="inline-block clickable h-10"
          src={imgSrc || ""}
          width={40}
          height={40}
        ></Image>
      </Link>
    </div>
  );
};

export default Navbar;
