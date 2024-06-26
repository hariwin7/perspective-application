import HireMeNow from "@/components/HireMeNow";
import Navbar from "@/components/editorComponents/Navbar";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="overflow-scroll w-full">
      <Navbar imgSrc="https://github.com/Review-Reels/review-reels-web/blob/master/public/logo512.png?raw=true" />
      <div className="w-full border-box pt-4 pl-8 pr-8 pb-4 ">
        <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
          <div className="transition-wrapper">
            <div className="wrapper break-words text-center font-extralight">
              <h4>
                Here is my application to a dream job, without a traditional job
                application!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <HireMeNow />
      <WorkSection />
    </main>
  );
}
