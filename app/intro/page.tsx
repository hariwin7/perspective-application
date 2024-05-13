import React from "react";

const intro = () => {
  return (
    <div className="break-words text-center  border-box pt-4 pl-8 pr-8 pb-4 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
      <h2 className="text-2xl md:text-4xl leading-9 font-semibold">
        I would like to briefly introduce myself to you. 👋
      </h2>
      <div className="break-words text-center w-full border-box pt-8 pl-8 pr-8 pb-8 mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <h4 className="font-extralight">
          Here&apos;s is who I&apos;m in 2 mins:
        </h4>
      </div>
      <div className="flex justify-center w-full h-[150%]">
        <iframe
          className="youtube-iframe"
          frameBorder="0"
          title="Video Resume"
          allowFullScreen
          src="https://www.youtube.com/embed/Ffft2F1YeBA?controls=0&autoplay=1"
        ></iframe>
      </div>
    </div>
  );
};

export default intro;

// import Block from "@/components/editorComponents/FormComponents/Block";

// export default async function Page({
//   params,
// }: {
//   params: { page_id: string };
// }) {
//   const pageData = await getData();

//   return (
//     <div className="grid rounded-lg overflow-visible w-[100%]">
//       {pageData.map((item, index) => (
//         <Block {...item} key={item.id || index} renderIn="page" />
//       ))}
//     </div>
//   );
// }

// export const getData = async () => {
//   const pageData = [
//     {
//       id: "1nav",
//       component: "navbar",
//       content:
//         "https://perspective.imgix.net/617f3780e99734002094f4c8.png?h=40&amp;dpr=2&amp;q=75&amp;auto=format,compress",
//     },
//     {
//       id: "1",
//       component: "text",
//       element: "h6",
//       content:
//         "Here is my application to a dream job, without a traditional job application!",
//     },
//     {
//       id: "2",
//       component: "text",
//       element: "h2",
//       content:
//         "Curious about how I can support your company's growth as a Front End/ Back End /Full Stack Developer?",
//       //   style: { color: "#000000" },
//     },
//     {
//       id: "3",
//       component: "button",
//       style: { width: "200px", backgroundColor: "#ffb70f" },
//       content: "Hire me now",
//     },
//     {
//       id: "4",
//       component: "text",
//       element: "h6",
//       // style: { fontWeight: 200 },
//       content: "📍 Remote 🚀 as of now ⏰ Full-time",
//     },
//     {
//       id: "5",
//       component: "text",
//       element: "h6",
//       style: { fontWeight: 200 },
//       content: "Hire me now as",
//     },
//     {
//       id: "6",
//       component: "text",
//       element: "h3",
//       style: { fontWeight: 600 },
//       content: "Front End / Backend Developer",
//     },
//     {
//       id: "10",
//       component: "imagecard",
//       items: [
//         {
//           content: "Yes, absolutely",
//           cardImgSrc:
//             "https://perspective.imgix.net/6019615ddf56ee001f39be7f.png?auto=compress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.51&fp-y=0.50&fp-z=1&h=480&ar=1.3333333333333333&dpr=2",
//           cardRoute: "/intro",
//         },
//         {
//           content: "Learn More",
//           cardImgSrc:
//             "https://perspective.imgix.net/601961b3e2bbda001f253741.png?ixlib=js-2.3.2&auto=format%2Ccompress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.50&fp-y=0.50&fp-z=1&h=480&q=80&ar=1.3333333333333333&dpr=2",
//         },
//       ],
//     },
//     {
//       id: "11",
//       component: "iframeembed",
//       content:
//         "https://www.youtube-nocookie.com/embed/Ffft2F1YeBA?si=0WWTHUFeMlWN4Aqq?controls=0&autoplay=1",
//     },
//   ];
//   return pageData;
// };
