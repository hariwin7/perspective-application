import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full p-4 border-box sm:py-6 bg-transparent">
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
