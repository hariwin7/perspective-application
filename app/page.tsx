import Image from "next/image";
import ArrowDown from "./components/ArrowDown";

export default function Home() {
  return (
    <main>
      <div className="w-full p-4 border-box sm:py-6 bg-transparent">
        <div className="text-left">
          <Image
            alt="Logo"
            className="inline-block clickable h-10"
            src="https://perspective.imgix.net/617f3780e99734002094f4c8.png?h=40&amp;dpr=2&amp;q=75&amp;auto=format,compress"
            width={40}
            height={40}
          ></Image>
        </div>
      </div>
      <div className="w-full border-box pt-4 pl-8 pr-8 pb-4">
        <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
          <div className="transition-wrapper">
            <div className="wrapper break-words text-center">
              <h4>
                Here is my application to a dream job, without a traditional job
                application!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-box pt-4 pl-8 pr-8 pb-6">
        <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
          <div className="transition-wrapper">
            <div className="wrapper break-words text-center">
              <h2 className="text-2xl md:text-4xl leading-9	">
                <strong>
                  Curious about how I can support your company&apos;s growth as
                  a Frontend Developer?
                </strong>
              </h2>
              <h2>
                <br />
              </h2>
              <h4>📍 Remote 🚀 as of now ⏰ Full-time</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl mt-6">
        <div className="w-full border-box pb-6">
          <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
            <div className="transition-wrapper">
              <div className="wrapper break-words text-center">
                <h4>Hire me now as</h4>
                <h3 className="text-2xl">
                  <strong>Frontend Developer </strong>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <div className="flex flex-col hover:scale-105 transition ease-in-out delay-150 cursor-pointer">
              <div className="w-[155.5px] h-[116.63px] md:w-[212px] md:h-[159px] rounded-t-md relative">
                <Image
                  src="https://perspective.imgix.net/6019615ddf56ee001f39be7f.png?auto=compress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.51&fp-y=0.50&fp-z=1&h=480&ar=1.3333333333333333&dpr=2"
                  alt="yes absolutely"
                  fill={true}
                  className="rounded-t-md"
                ></Image>
              </div>
              <div className="bg-yellow-button text-white h-14 rounded-b-md flex justify-center items-center">
                Yes, absolutely
              </div>
            </div>
            <div className="flex flex-col hover:scale-105 transition ease-in-out delay-150 cursor-pointer">
              <div className="w-[155.5px] h-[116.63px] md:w-[212px] md:h-[159px] rounded-t-md relative">
                <Image
                  src="https://perspective.imgix.net/601961b3e2bbda001f253741.png?ixlib=js-2.3.2&auto=format%2Ccompress&crop=focalpoint&cropHeight=360&cropWidth=480&fit=crop&fp-x=0.50&fp-y=0.50&fp-z=1&h=480&q=80&ar=1.3333333333333333&dpr=2"
                  alt="yes absolutely"
                  fill={true}
                  className="rounded-t-md"
                ></Image>
              </div>
              <div className="bg-yellow-button text-white h-14 rounded-b-md flex justify-center items-center">
                Learn More
              </div>
            </div>
          </div>
          <ArrowDown />
        </div>
      </div>
    </main>
  );
}
