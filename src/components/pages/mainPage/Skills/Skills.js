import React from "react";
import Card from "../Card";
import SkillsWidget from "./SkillWidget";
import skillData from "../../../../res/data/skills";
import "../mainPage.scss";
import "./skills.scss";

function Skills() {
  return (
    <Card title={"Skills:"}>
      <div className="skillWidgetHolder">
        {skillData.map((skill) => (
          <SkillsWidget
            key={`${skill.skillName}${skill.percentage}`}
            technology={skill.skillName}
            percentage={skill.percentage}
            description={skill.description}
          />
        ))}
      </div>
    </Card>
  );
}

export default Skills;
