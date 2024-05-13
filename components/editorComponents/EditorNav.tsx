"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NotePencil } from "@phosphor-icons/react";
import useEditorStore from "@/store/editorStore";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

const Navbar = ({ fixed }: { fixed?: boolean }) => {
  const editMode = useEditorStore((state) => state.editMode);
  const setEditMode = useEditorStore((state) => state.setEditMode);

  const setCurrentSideBarComponent = useEditorStore(
    (state) => state.setCurrentSideBarComponent
  );

  const editorConfig = useEditorStore((state) => state.editorConfig);
  const router = useRouter();

  const handlePublish = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const uniquePageId = nanoid();
      localStorage.setItem(uniquePageId, JSON.stringify(editorConfig));
      router.push(`/pages/${uniquePageId}`);
    }
  };
  return (
    <div
      className={`flex justify-between w-full p-4 border-box bg-transparent drop-shadow-md ${
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
      <div className="flex gap-10 justify-center items-center">
        <div
          className={`p-2 hover:bg-[#F2F8FF] drop-shadow-none rounded-lg ${
            editMode && "bg-[#F2F8FF]"
          }`}
          onClick={() => {
            if (editMode) setCurrentSideBarComponent("");
            setEditMode(!editMode);
          }}
        >
          <NotePencil
            size={22}
            className={`cursor-pointer hover:text-hover-blue ${
              editMode && "text-hover-blue"
            }`}
          />
        </div>
        <button
          className="bg-primary-blue text-white px-6 py-2 text-sm capitalize rounded-lg drop-shadow-sm hover:bg-hover-blue"
          onClick={handlePublish}
        >
          publish
        </button>
      </div>
    </div>
  );
};

export default Navbar;
