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
//         "https://github.com/Review-Reels/review-reels-web/blob/master/public/logo512.png?raw=true",
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
//             "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           cardRoute: "/intro",
//         },
//         {
//           content: "Learn More",
//           cardImgSrc:
//             "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
