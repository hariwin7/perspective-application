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
  imageCard: "imagecard",
};

export const blocks = [
  {
    name: "Navbar",
    defaultConfig: {
      component: "navbar",
      content:
        "https://perspective.imgix.net/617f3780e99734002094f4c8.png?h=40&amp;dpr=2&amp;q=75&amp;auto=format,compress",
    },
    editorSettingsConfig: [
      [
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "justifyContent",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "justifyContent",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          label: "",
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
          label: "Image Url",
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
          label: "",
          config: {
            content: "S",
            value: "h6",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          label: "",
          config: {
            content: "M",
            value: "h4",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          label: "",
          config: {
            content: "L",
            value: "h2",
            key: "element",
          },
        },
        {
          name: "SizeToggle",
          label: "",
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
          label: "",
          config: {
            content: <TextB size={22} />,
            key: "fontWeight",
            value: 500,
          },
        },
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextItalic size={22} />,
            key: "fontStyle",
            value: "italic",
          },
        },
        {
          name: "StyleToggle",
          label: "",
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
          label: "",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "textAlign",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "textAlign",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          label: "",
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
          label: "Text content",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
      [
        {
          name: "ColorPicker",
          label: "",
          config: {
            colors: [
              "#0267C1",
              "#0075C4",
              "#EFA00B",
              "#D65108",
              "#591F0A",
              "#FFFFFF",
              "#000000",
              "#ffb70f",
            ],
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
          label: "",
          config: {
            content: <TextAlignLeft size={22} />,
            key: "justifySelf",
            value: "start",
          },
        },
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "justifySelf",
            value: "center",
          },
        },
        {
          name: "StyleToggle",
          label: "",
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
          label: "Button Text",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
      [
        {
          name: "ColorPicker",
          label: "",
          config: {
            colors: [
              "#0267C1",
              "#0075C4",
              "#EFA00B",
              "#D65108",
              "#591F0A",
              "#FFFFFF",
              "#000000",
              "#ffb70f",
            ],
            key: "backgroundColor",
          },
        },
      ],
    ],
  },
  {
    name: "ImageCard",
    defaultConfig: {
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
    editorSettingsConfig: [
      [
        {
          name: "ImageCard",
          label: "",
          config: [],
        },
      ],
    ],
  },
  {
    name: "IframeEmbed",
    defaultConfig: {
      component: "iframeembed",
      content:
        "https://www.youtube.com/embed/Ffft2F1YeBA?controls=0&autoplay=1",
    },
    editorSettingsConfig: [
      [
        {
          name: "Textarea",
          label: "Url",
          config: {
            content: "",
            key: "content",
          },
        },
      ],
    ],
  },
];
