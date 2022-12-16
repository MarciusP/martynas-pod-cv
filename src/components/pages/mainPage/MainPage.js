import React, { useState } from "react";
import GenInfo from "./GenInfo";
import Education from "./Education";
import Skills from "./Skills";

function MainPage() {
  return (
    <div className="MainPageStyling">
      <GenInfo />
      <Education />
      <Skills />
    </div>
  );
}

export default MainPage;
