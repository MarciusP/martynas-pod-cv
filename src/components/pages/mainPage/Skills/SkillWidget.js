import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "../mainPage.scss";

function SkillsWidget(props) {
  let { technology, percentage, description } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (percentage > 100) {
    percentage = 100;
  }

  let borders = "";
  switch (percentage) {
    case 94:
      borders = "15px 5px 5px 15px";
      break;
    case 95:
      borders = "15px 7px 7px 15px";
      break;
    case 96:
      borders = "15px 8px 8px 15px";
      break;
    case 97:
      borders = "15px 9px 9px 15px";
      break;
    case 98:
      borders = "15px 11px 11px 15px";
      break;
    case 99:
      borders = "15px 12px 12px 15px";
      break;
    case 100:
      borders = "15px 15px 15px 15px";
      break;
    default:
      borders = "15px 0 0 15px";
      break;
  }

  return (
    <div>
      <div className="skillWidget" onClick={handleOpen}>
        <div className="skillTechName">{technology}</div>
        <div className="skillWidgetPercentageBg">
          <div
            className="skillWidgetBgElement"
            style={{
              width: `${percentage}%`,
              backgroundColor: "#20c96c",
              borderRadius: borders,
            }}
          />
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="skillWidgetPopUp">
          <div
            style={{
              fontSize: "1.4em",
              fontWeight: "600",
              marginBottom: "1.5vh",
            }}
          >
            Details:
          </div>
          <div style={{ marginBottom: "1.5vh", fontSize: "1.2em" }}>
            {description.split("\n").map((str) => (
              <p key={str}>{str}</p>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SkillsWidget;
