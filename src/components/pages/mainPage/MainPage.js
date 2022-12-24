import React from "react";
import GenInfo from "./GeneralInfo/GenInfo";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";

function MainPage() {
  return (
    <div className="MainPageStyling">
      <GenInfo />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}

export default MainPage;
