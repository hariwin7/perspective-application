import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

import { MaincomponentPropWithId as Element } from "@/types/editorTypes";

const TEST_ELEMENT = [
  {
    id: "1nav",
    component: "navbar",
    content:
      "https://perspective.imgix.net/617f3780e99734002094f4c8.png?h=40&amp;dpr=2&amp;q=75&amp;auto=format,compress",
  },
  {
    id: "1",
    component: "text",
    element: "h6",
    content:
      "Here is my application to a dream job, without a traditional job application!",
  },
  {
    id: "2",
    component: "text",
    element: "h2",
    content:
      "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
    style: { color: "#000000" },
  },
  {
    id: "3",
    component: "button",
    style: { width: "200px", backgroundColor: "#ffb70f" },
    content: "Hire me now",
  },
  {
    id: "4",
    component: "text",
    element: "h6",
    // style: { fontWeight: 200 },
    content: "📍 Remote 🚀 as of now ⏰ Full-time",
  },
  {
    id: "5",
    component: "text",
    element: "h6",
    style: { fontWeight: 200 },
    content: "Hire me now as",
  },
  {
    id: "6",
    component: "text",
    element: "h3",
    style: { fontWeight: 600 },
    content: "Front End / Backend Developer",
  },
  {
    id: "10",
    component: "imagecard",
    items: [
      {
        content: "Yes, absolutely",
        cardImgSrc:
          "https://perspective.imgix.net/6019615ddf56ee001f39be7f.png?auto=compress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.51&fp-y=0.50&fp-z=1&h=480&ar=1.3333333333333333&dpr=2",
        cardRoute: "/intro",
      },
      {
        content: "Learn More",
        cardImgSrc:
          "https://perspective.imgix.net/601961b3e2bbda001f253741.png?ixlib=js-2.3.2&auto=format%2Ccompress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.50&fp-y=0.50&fp-z=1&h=480&q=80&ar=1.3333333333333333&dpr=2",
      },
    ],
  },
  {
    id: "11",
    component: "iframeembed",
    content:
      "https://www.youtube-nocookie.com/embed/Ffft2F1YeBA?si=0WWTHUFeMlWN4Aqq?controls=0&autoplay=1",
  },
];

interface EditorState {
  editorConfig: Element[];
  setEditorConfig: (newConfig: Element[]) => void;

  currentSelection: string;
  setCurrentSelection: (selection: string) => void;

  editMode: boolean;
  setEditMode: (mode: boolean) => void;

  currentSideBarComponent: string;
  setCurrentSideBarComponent: (mode: string) => void;
}

const useEditorStore = create<EditorState>()(
  devtools(
    persist(
      (set) => ({
        currentSelection: "",
        setCurrentSelection: (selection) =>
          set(() => ({
            currentSelection: selection,
          })),

        editorConfig: TEST_ELEMENT,
        setEditorConfig: (newConfig) =>
          set(() => ({
            editorConfig: newConfig,
          })),

        editMode: false,
        setEditMode: (mode) =>
          set(() => ({
            editMode: mode,
          })),

        currentSideBarComponent: "",
        setCurrentSideBarComponent: (mode) =>
          set(() => ({
            currentSideBarComponent: mode,
          })),
      }),
      {
        name: "current selection",
      }
    )
  )
);

export default useEditorStore;
