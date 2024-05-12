"use client";
import useEditorStore from "@/store/editorStore";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { MaincomponentPropWithId } from "@/types/editorTypes";
import { Toggle } from "@/components/ui/toggle";
import { CssSettingsArgs } from "@/types/editorTypes";
import { blocks, editorSettingsType } from "@/constants/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { nanoid } from "nanoid";

const BlockEditorConfig = () => {
  const currentSelection = useEditorStore((state) => state.currentSelection);
  const setEditorConfig = useEditorStore((state) => state.setEditorConfig);
  const editorConfig = useEditorStore((state) => state.editorConfig);

  const currentBlockElement: MaincomponentPropWithId | undefined =
    editorConfig.find((item) => item.id === currentSelection);

  const handleContentChange = (key: string, value: string) => {
    const editEditorConfig = [...editorConfig];
    const currentBlockElementIndex = editorConfig.findIndex(
      (item) => item.id === currentSelection
    );
    editEditorConfig[currentBlockElementIndex] = {
      ...currentBlockElement,
      [key]: value,
    };
    setEditorConfig(editEditorConfig);
  };

  const handleCssSettingsChange = ({
    pressed,
    cssProperty,
    cssValue,
  }: CssSettingsArgs) => {
    let style: Object = {};
    if (pressed) {
      style = {
        ...currentBlockElement?.style,
        [cssProperty]: cssValue,
      };
    } else {
      style = { ...currentBlockElement?.style };
      delete style[cssProperty as keyof Object];
    }
    let editElementData = { ...currentBlockElement };
    const editEditorConfig = [...editorConfig];
    const currentBlockElementIndex = editorConfig.findIndex(
      (item) => item.id === currentSelection
    );
    editElementData = { ...editElementData, style };
    editEditorConfig[currentBlockElementIndex] = editElementData;
    setEditorConfig(editEditorConfig);
  };

  const getComponent = (
    name: string,
    config: any,
    id: string,
    currentBlockElement: MaincomponentPropWithId | undefined
  ) => {
    switch (name.toLowerCase()) {
      case editorSettingsType.styleToggle:
        return (
          <Toggle
            key={id}
            onPressedChange={(pressed) =>
              handleCssSettingsChange({
                pressed,
                cssProperty: config.key,
                cssValue: config.value,
              })
            }
            pressed={
              currentBlockElement?.style?.hasOwnProperty(config.key) &&
              currentBlockElement.style[config.key as keyof Object] ==
                config.value
            }
          >
            {config.content}
          </Toggle>
        );
      case editorSettingsType.textArea:
        return (
          <Textarea
            key={id}
            rows={6}
            value={
              currentBlockElement &&
              currentBlockElement[config.key as keyof Object].toString()
            }
            onChange={(event) =>
              handleContentChange(config.key, event.target.value)
            }
          />
        );
      case editorSettingsType.sizeToggle:
        return (
          <Toggle
            key={id}
            onPressedChange={() =>
              handleContentChange(config.key, config.value)
            }
            pressed={
              currentBlockElement?.hasOwnProperty(config.key) &&
              currentBlockElement[config.key as keyof Object] == config.value
            }
          >
            {config.content}
          </Toggle>
        );
      case editorSettingsType.colorPicker:
        return (
          <Select
            key={id}
            value={
              currentBlockElement?.style?.hasOwnProperty(config.key) &&
              currentBlockElement.style[config.key as keyof Object]
            }
            onValueChange={(value) =>
              handleCssSettingsChange({
                pressed: true,
                cssProperty: config.key,
                cssValue: value,
              })
            }
          >
            <SelectTrigger className="w-24 h-12">
              <SelectValue className="w-16 h-12 rounded" />
            </SelectTrigger>
            <SelectContent>
              {config?.colors.map((color: string) => (
                <SelectItem value={color} key={color}>
                  <div
                    className="w-14 h-10 rounded"
                    style={{ backgroundColor: color }}
                  ></div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
    }
  };

  const editorSettingsConfig = blocks.find(
    (block) =>
      block.name.toLowerCase() === currentBlockElement?.component?.toLowerCase()
  )?.editorSettingsConfig;

  return (
    <div className="flex flex-col p-4 w-full gap-4">
      <h1 className="text-xl font-semibold p-2 capitalize">
        {currentBlockElement?.component}
      </h1>
      {editorSettingsConfig?.length &&
        editorSettingsConfig.map((section, index) => (
          <div
            className=" bg-[#F4F5F7] rounded-xl p-1 justify-center flex gap-2"
            key={nanoid()}
          >
            {section?.map((editorConfig) => {
              return getComponent(
                editorConfig.name,
                editorConfig.config,
                nanoid(),
                currentBlockElement
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default BlockEditorConfig;
