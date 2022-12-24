import React from "react";

function SkillChip(props) {
  const { skillName } = props;

  return <div className="expSkillChip">{skillName}</div>;
}

export default SkillChip;
