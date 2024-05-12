//The different components and its settings
import {
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react";

export const sideBarType = {
  addBlock: "add-block",
  blockElement: "block-element",
};

export const editorSettingsType = {
  styleToggle: "styletoggle",
  sizeToggle: "sizetoggle",
  textArea: "textarea",
  colorPicker: "colorpicker",
};

export const blocks = [
  {
    name: "Navbar",
    defaultConfig: {
      component: "navbar",
    },
    editorSettingsConfig: [
      [
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "justifyContent",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "justifyContent",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignRight size={22} />,
            key: "justifyContent",
            value: "end",
          },
        },
      ],
      [
        {
          name: "Textarea",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
    ],
  },
  {
    name: "Text",
    defaultConfig: {
      component: "text",
      element: "h1",
      content:
        "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
    },
    editorSettingsConfig: [
      [
        {
          name: "SizeToggle",
          config: {
            content: "S",
            value: "h6",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          config: {
            content: "M",
            value: "h4",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          config: {
            content: "L",
            value: "h2",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          config: {
            content: "XL",
            value: "h1",
            key: "element",
          },
        },
      ],
      [
        {
          name: "StyleToggle",
          config: {
            content: <TextB size={22} />,
            key: "fontWeight",
            value: 500,
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextItalic size={22} />,
            key: "fontStyle",
            value: "italic",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextUnderline size={22} />,
            key: "textDecoration",
            value: "underline",
          },
        },
      ],
      [
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "textAlign",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "textAlign",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignRight size={22} />,
            key: "textAlign",
            value: "end",
          },
        },
      ],
      [
        {
          name: "Textarea",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
      [
        {
          name: "ColorPicker",
          config: {
            colors: ["#0267C1", "#0075C4", "#EFA00B", "#D65108", "#591F0A"],
            key: "color",
          },
        },
      ],
    ],
  },
  {
    name: "Button",
    defaultConfig: {
      component: "button",
      style: { width: "200px" },
      content: "Hire me now",
    },
    editorSettingsConfig: [
      [
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "justifySelf",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "justifySelf",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          config: {
            content: <TextAlignRight size={22} />,
            key: "justifySelf",
            value: "end",
          },
        },
      ],
      [
        {
          name: "Textarea",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
      [
        {
          name: "ColorPicker",
          config: {
            colors: ["#0267C1", "#0075C4", "#EFA00B", "#D65108", "#591F0A"],
            key: "backgroundColor",
          },
        },
      ],
    ],
  },
  {
    name: "Card",
    defaultConfig: {
      component: "imagecard",
      items: [
        {
          cardText: "Yes, absolutely",
          cardImgSrc:
            "https://perspective.imgix.net/6019615ddf56ee001f39be7f.png?auto=compress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.51&fp-y=0.50&fp-z=1&h=480&ar=1.3333333333333333&dpr=2",
          cardRoute: "/intro",
        },
        {
          cardText: "Learn More",
          cardImgSrc:
            "https://perspective.imgix.net/601961b3e2bbda001f253741.png?ixlib=js-2.3.2&auto=format%2Ccompress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.50&fp-y=0.50&fp-z=1&h=480&q=80&ar=1.3333333333333333&dpr=2",
        },
      ],
    },
  },
];
