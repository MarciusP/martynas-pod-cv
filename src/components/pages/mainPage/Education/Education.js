import React from "react";
import "../mainPage.scss";
import "./education.scss";
import Card from "../Card";
import EducationData from "./EducationData";

function Education() {
  return (
    <Card title={"Education:"}>
      <div className="imageAndDetails">
        <EducationData
          title={"School Graduation"}
          institution={"Vilniaus J. Basanaviciaus Gymnasium"}
          years={[2012, 2016]}
        />
        <EducationData
          title={"BSc in Computer Science"}
          institution={"The University of Manchester"}
          years={[2016, 2019]}
        />
      </div>
    </Card>
  );
}

export default Education;
