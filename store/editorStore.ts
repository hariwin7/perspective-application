import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

import { MaincomponentPropWithId as Element } from "@/types/editorTypes";

const TEST_ELEMENT = [
  {
    id: "1",
    component: "navbar",
    content:
      "https://github.com/Review-Reels/review-reels-web/blob/master/public/logo512.png?raw=true",
  },
  {
    id: "2",
    component: "text",
    element: "h6",
    content:
      "Here is my application to a dream job, without a traditional job application!",
    style: { color: "#000000" },
  },
  {
    id: "3",
    component: "text",
    element: "h2",
    content:
      "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
    style: { color: "#000000" },
  },
  {
    id: "4",
    component: "button",
    style: { width: "200px", backgroundColor: "#ffb70f" },
    content: "Hire me now",
    redirectTo: "https://www.hariprasadkb.com",
  },
  {
    id: "5",
    component: "text",
    element: "h6",
    style: { color: "#000000" },
    content: "📍 Remote 🚀 as of now ⏰ Full-time",
  },
  {
    id: "6",
    component: "text",
    element: "h6",
    style: { color: "#000000" },
    content: "Hire me now as",
  },
  {
    id: "7",
    component: "text",
    element: "h3",
    style: { color: "#000000" },
    content: "Front End / Backend Developer",
  },
  {
    id: "8",
    component: "imagecard",
    items: [
      {
        content: "Yes, absolutely",
        cardImgSrc:
          "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardRoute: "https://www.hariprasadkb.com/",
      },
      {
        content: "Learn More",
        cardImgSrc:
          "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        cardRoute: "https://www.linkedin.com/in/hariprasad-k-b-58878512b/",
      },
    ],
  },
  {
    id: "9",
    component: "text",
    element: "h6",
    style: { color: "#000000" },
    content: "Here's a 2 min video resume",
  },
  {
    id: "10",
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
    // persist(
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
    })
    //   {
    //     name: "current selection",
    //   }
    // )
  )
);

export default useEditorStore;
