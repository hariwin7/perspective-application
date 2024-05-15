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
        "https://github.com/Review-Reels/review-reels-web/blob/master/public/logo512.png?raw=true",
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
      redirectTo: "https://www.hariprasadkb.com",
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
          name: "Textarea",
          label: "Redirect to",
          config: {
            content: "",
            key: "redirectTo",
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
    name: "ImageCard",
    defaultConfig: {
      component: "imagecard",
      items: [
        {
          content: "Yes, absolutely",
          cardImgSrc:
            "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          cardRoute: "/intro",
        },
        {
          content: "Learn More",
          cardImgSrc:
            "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    editorSettingsConfig: [
      [
        {
          name: "StyleToggle",
          label: "",
          config: {
            content: <TextAlignJustify size={22} />,
            key: "flexDirection",
            value: "column",
          },
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
