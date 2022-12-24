import React from "react";
import "../mainPage.scss";
import "./experience.scss";
import Card from "../Card";
import ExperienceWidget from "./ExperienceWidget";
import experienceData from "../../../../res/data/experiences";

function Experience() {
  return (
    <Card title={"Experience"}>
      <div className="experienceWidgets">
        {experienceData.map((entry) => (
          <ExperienceWidget
            key={`${entry.companyName}${entry.position}`}
            companyName={entry.companyName}
            position={entry.position}
            experienceDescription={entry.experienceDescription}
            skillsUsed={entry.skillsUsed}
            startDate={entry.startDate}
            endDate={entry.endDate}
            location={entry.location}
          />
        ))}
      </div>
    </Card>
  );
}

export default Experience;
