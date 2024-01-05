import TitleSection from "@/components/landing-page/title-section";
import React from "react";
import AppBanner from "../../../public/appBanner.png"
const Homepage = () => {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="Your Workspace, Perfected"
          title="All-in-one Collaboration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r form-primary to-brand-primaryBlue sm:w-[300px]">
          <button className="w-full btn-secondary rounded-[10px] p-6 text-2xl bg-background">
            Get Cypress Free
          </button>
        </div>
        {/* <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
            <img src="AppBanner" alt="BgImage"/>
        </div> */}
      </div>
    </section>
  );
};

export default Homepage;
