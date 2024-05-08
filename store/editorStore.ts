import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

const TEST_ELEMENT = [
  {
    id: "1",
    element: "h4",
    className: "text-sm font-thin text-center p-2",
    content:
      "Here is my application to a dream job, without a traditional job application!",
  },
  {
    id: "2",
    element: "h1",
    className: "text-2xl font-bold text-center p-2",
    content:
      "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
  },
  {
    id: "3",
    element: "button",
    className:
      "bg-[#ffb70f] text-white p-2 text-sm capitalize rounded-lg drop-shadow-sm hover:bg-[#ffb70f] m-4 w-40",
    content: "Hire me now",
  },
  {
    id: "4",
    element: "h4",
    className: "text-sm font-thin text-center p-2",
    content: "📍 Remote 🚀 as of now ⏰ Full-time",
  },
  {
    id: "5",
    element: "h4",
    className: "text-sm font-thin text-center p-2",
    content: "Hire me now as",
  },
  {
    id: "6",
    element: "h3",
    className: "text-xl font-bold text-center p-2",
    content: "Front End / Backend Developer",
  },
];

interface Element {
  id: string;
  element: string;
  className: string;
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
      }),
      {
        name: "current selection",
      }
    )
  )
);

export default useEditorStore;
