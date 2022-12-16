import React from "react";
import "./mainPage.scss";
import Card from "./Card";
import SkillsWidget from "./SkillWidget";
import skillData from "../../../res/data/skills";

function Skills() {
  return (
    <Card title={"Skills:"}>
      <div className="skillWidgetHolder">
        {skillData.map((skill) => (
          <SkillsWidget
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
