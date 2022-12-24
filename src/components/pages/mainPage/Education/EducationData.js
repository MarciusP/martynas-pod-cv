import React from "react";
import "../mainPage.scss";
import "./education.scss";

function EducationData(props) {
  const { title, institution, years } = props;

  return (
    <div className="educationData">
      <div className="educationTitle">{title}</div>
      <div className="educationInstitution">{institution}</div>
      <div className="educationYears">{`${years[0]} - ${years[1]}`}</div>
    </div>
  );
}

export default EducationData;
