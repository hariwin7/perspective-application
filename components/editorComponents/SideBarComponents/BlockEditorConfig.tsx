"use client";
import useEditorStore from "@/store/editorStore";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react";

const BlockEditorConfig = () => {
  const currentSelection = useEditorStore((state) => state.currentSelection);
  const editorConfig = useEditorStore((state) => state.editorConfig);

  const currentBlockElement = editorConfig.find(
    (item) => item.id === currentSelection
  );

  return (
    <div className="flex flex-col p-4 w-full gap-4">
      <h1 className="text-xl font-semibold p-2 capitalize">
        {currentBlockElement?.component}
      </h1>
      <ToggleGroup
        type="multiple"
        className="bg-[#F4F5F7] rounded-xl p-1"
        onValueChange={(value) => console.log(value)}
      >
        <ToggleGroupItem
          value="10px"
          aria-label="Toggle small"
          className="text-xl font-thin"
        >
          S
        </ToggleGroupItem>
        <ToggleGroupItem
          value="20px"
          aria-label="Toggle medium"
          className="text-xl font-thin"
        >
          M
        </ToggleGroupItem>
        <ToggleGroupItem
          value="30px"
          aria-label="Toggle large"
          className="text-xl font-thin"
        >
          L
        </ToggleGroupItem>
        <ToggleGroupItem
          value="40px"
          aria-label="Toggle extra large"
          className="text-xl font-thin"
        >
          XL
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        type="multiple"
        className="bg-[#F4F5F7] rounded-xl p-1"
        onValueChange={(value) => console.log(value)}
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <TextB size={22} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <TextItalic size={22} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <TextUnderline size={22} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default BlockEditorConfig;
