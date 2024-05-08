import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ fixed }: { fixed?: boolean }) => {
  return (
    <div
      className={`w-full p-4 border-box  bg-transparent drop-shadow-md ${
        fixed && "sticky top-0 z-40"
      }`}
    >
      <Link className="text-left" href="/">
        <Image
          alt="Logo"
          className="inline-block clickable h-10"
          src="https://perspective.imgix.net/617f3780e99734002094f4c8.png?h=40&amp;dpr=2&amp;q=75&amp;auto=format,compress"
          width={40}
          height={40}
        ></Image>
      </Link>
    </div>
  );
};

export default Navbar;
