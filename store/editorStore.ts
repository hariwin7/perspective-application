import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

const TEST_ELEMENT = [
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
    className: "text-2xl font-semibold",
    content:
      "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
  },
  {
    id: "3",
    component: "button",
    style: { width: "200px" },
    content: "Hire me now",
  },
  {
    id: "4",
    component: "text",
    element: "h5",
    style: { fontWeight: 200 },
    content: "📍 Remote 🚀 as of now ⏰ Full-time",
  },
  {
    id: "5",
    component: "text",
    element: "h5",
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
  // {
  //   id: "7",
  //   component: "text",
  //   element: "h5",
  //   style: { fontWeight: 200 },
  //   content: "Hire me now as",
  // },
  // {
  //   id: "8",
  //   component: "text",
  //   element: "h3",
  //   style: { fontWeight: 600 },
  //   content: "Front End / Backend Developer",
  // },
  // {
  //   id: "9",
  //   component: "text",
  //   element: "h2",
  //   className: "text-2xl font-semibold",
  //   content:
  //     "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
  // },
  // {
  //   id: "10",
  //   component: "text",
  //   element: "h2",
  //   className: "text-2xl font-semibold",
  //   content:
  //     "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
  // },
];

interface Element {
  id: string;
  component: string;
  element?: string;
  className?: string;
  style?: Object;
  content: string;
}

interface EditorState {
  editorConfig: Element[];
  setEditorConfig: (newConfig: Element[]) => void;

  currentSelection: string;
  setCurrentSelection: (selection: string) => void;

  editMode: boolean;
  setEditMode: (mode: boolean) => void;
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
    })
    //   {
    //     name: "current selection",
    //   }
    // )
  )
);

export default useEditorStore;
