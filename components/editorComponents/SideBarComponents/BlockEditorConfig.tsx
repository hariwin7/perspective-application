"use client";
import useEditorStore from "@/store/editorStore";
import React, { ChangeEvent } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react";

const BlockEditorConfig = () => {
  const currentSelection = useEditorStore((state) => state.currentSelection);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);
  const editorConfig = useEditorStore((state) => state.editorConfig);

  const currentBlockElement = editorConfig.find(
    (item) => item.id === currentSelection
  );

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const EditElementData = { ...currentBlockElement };
    const editEditorConfig = [...editorConfig];
    const currentBlockElementIndex = editorConfig.findIndex(
      (item) => item.id === currentSelection
    );
    EditElementData.content = event.target.value;
    editEditorConfig[currentBlockElementIndex] = EditElementData;
    setEditorConfig(editEditorConfig);
  };

  const handleCssChanges = (cssProperty: string, value: string) => {
    const style = {
      ...currentBlockElement?.style,
      [cssProperty]: value,
    };
    let EditElementData = { ...currentBlockElement };
    const editEditorConfig = [...editorConfig];
    const currentBlockElementIndex = editorConfig.findIndex(
      (item) => item.id === currentSelection
    );
    EditElementData.style = { ...style };
    editEditorConfig[currentBlockElementIndex] = EditElementData;
    setEditorConfig(editEditorConfig);
  };

  const handleHeaderChange = (value: string) => {
    if (!value) return;

    let EditElementData = { ...currentBlockElement };
    const editEditorConfig = [...editorConfig];
    const currentBlockElementIndex = editorConfig.findIndex(
      (item) => item.id === currentSelection
    );
    EditElementData.element = value;
    console.log(EditElementData, "EditElementData");
    editEditorConfig[currentBlockElementIndex] = EditElementData;
    setEditorConfig(editEditorConfig);
  };

  return (
    <div className="flex flex-col p-4 w-full gap-4">
      <h1 className="text-xl font-semibold p-2 capitalize">
        {currentBlockElement?.component}
      </h1>
      <ToggleGroup
        type="single"
        className="bg-[#F4F5F7] rounded-xl p-1"
        onValueChange={handleHeaderChange}
        value={currentBlockElement?.element}
      >
        <ToggleGroupItem
          value="h6"
          aria-label="Toggle small"
          className="text-xl font-thin"
        >
          S
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h4"
          aria-label="Toggle medium"
          className="text-xl font-thin"
        >
          M
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h2"
          aria-label="Toggle large"
          className="text-xl font-thin"
        >
          L
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h1"
          aria-label="Toggle extra large"
          className="text-xl font-thin"
        >
          XL
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        type="multiple"
        className="bg-[#F4F5F7] rounded-xl p-1"
        onValueChange={(value: []) => {
          value.forEach((val: string) => {
            const [cssProperty, value] = val.split(":");
            handleCssChanges(cssProperty, value);
          });
        }}
      >
        <ToggleGroupItem value="fontWeight:bold" aria-label="Toggle bold">
          <TextB size={22} />
        </ToggleGroupItem>
        <ToggleGroupItem value="fontStyle:italic" aria-label="Toggle italic">
          <TextItalic size={22} />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="textDecoration:underline"
          aria-label="Toggle strikethrough"
        >
          <TextUnderline size={22} />
        </ToggleGroupItem>
      </ToggleGroup>
      <Textarea
        rows={6}
        value={currentBlockElement?.content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default BlockEditorConfig;
