import React from "react";
import Modal from "@mui/material/Modal";
import SkillChip from "./SkillChip";
import "../mainPage.scss";
import "./experience.scss";

function ExperienceWidget(props) {
  const {
    companyName,
    position,
    experienceDescription,
    skillsUsed,
    startDate,
    endDate,
    location,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="expWidget" onClick={handleOpen}>
        <div className="expWidgetTop">
          <div className="expCompany">{companyName}</div>
          <div className="expDates">
            {startDate}
            {endDate ? ` - ${endDate}` : ""}
          </div>
        </div>
        <div className="expPosition">{position}</div>
        <hr />
        <div
          style={{ fontWeight: "500", fontSize: "1.1em", marginBottom: ".5vh" }}
        >
          Top Skills aquired:
        </div>
        <div className="expChipHolder">
          {skillsUsed ? (
            skillsUsed.map((skill) => (
              <SkillChip key={skill} skillName={skill} />
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="expFooter">
          <div className="expLocation">{location}</div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div>{experienceDescription}</div>
      </Modal>
    </div>
  );
}

export default ExperienceWidget;
