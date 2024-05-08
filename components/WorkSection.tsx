import React from "react";

const experiences = [
  {
    year: "2023-Present",
    companyName: "DERA",
    location: "England, London (Remote)",
    role: "Founding Engineer, Lead ",
  },
  {
    year: "2022-Present",
    companyName: "StoreProps ",
    location: "India (Remote)",
    role: "Technical Co-founder",
  },
  {
    year: "2021-2023",
    companyName: "Review Reels",
    location: "India (Own product)",
    role: "Technical Co-founder",
  },
  {
    year: "2022-2022",
    companyName: "Filestage",
    location: "Stuttgart, Germany (Remote)",
    role: "Software Developer",
  },

  {
    year: "2021-2022",
    companyName: "Tranzact",
    location: "Mumbai, India (Remote)",
    role: "Software Engineer II",
  },
  {
    year: "2019-2020",
    companyName: "Work On Grid",
    location: "Banglore, India",
    role: "Software Development Engineer",
  },
  {
    year: "2018-2018",
    companyName: "Caredata Solutions Pvt Ltd.",
    location: "Thrissur, India",
    role: "Junior Software Engineer",
  },
  {},
];

const WorkSection = () => {
  return (
    <div className="w-full border-box pt-4 pl-8 pr-8 pb-6">
      <div className="mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl">
        <div className="transition-wrapper">
          <div className="wrapper break-words text-center">
            <h2 className="text-2xl md:text-4xl leading-9 font-semibold">
              Where I&apos;ve Worked
            </h2>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-center border-box pt-4 pl-[20%] pr-8 pb-6 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:w-[50%] w-full gap md:mb-10 mb-5"
            >
              <h6 className="text-gray-400 text-sm">{experience?.year}</h6>
              <div className="flex  flex-col md:gap-4  md:flex-row">
                <h3 className="text-l font-semibold">
                  {experience?.companyName}
                </h3>
                <h4 className="font-normal text-sm">{experience?.location}</h4>
              </div>
              <h5 className="text">{experience?.role}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
