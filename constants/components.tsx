//The different components and its settings

export const sideBarType = {
  addBlock: "add-block",
  blockElement: "block-element",
};

export const blocks = [
  {
    name: "Navbar",
    defaultConfig: {
      component: "navbar",
    },
  },
  {
    name: "Text",
    defaultConfig: {
      component: "text",
      element: "h1",
      content:
        "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
    },
  },
  {
    name: "Button",
    defaultConfig: {
      component: "button",
      style: { width: "200px" },
      content: "Hire me now",
    },
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
