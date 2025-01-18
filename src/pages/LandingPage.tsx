

import React from "react";
import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";
import SuccessStories from "../components/SuccessStories";
import SmartWaterMgmt from "../components/SmartWaterMGMT";
import data from "../data/data.json";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      {data.sections.map((section, index) => {
        if (section.title === "Success Stories") {
          return (
            <SuccessStories
              key={index}
              title={section.title}
              content={section.content}
              caseStudies={section.caseStudies}
            />
          );
        } else if (section.title === "Why Smart Water Management?") {
          return (
            <SmartWaterMgmt
  key={index}
  title={section.title}
  content={section.content}
  benefits={section.benefits} // No transformation here
/>

          );
        } else {
          return (
            <Section
              key={index}
              title={section.title}
              content={section.content}
              benefits={section.benefits?.map((benefit) => benefit.name)} // Transform to string[]
              image={section.image}
            />
          );
        }
      })}
    </>
  );
};

export default LandingPage;
