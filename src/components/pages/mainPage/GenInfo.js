import React from "react";
import "./mainPage.scss";
import ContactLine from "./ContactLine";
import Card from "./Card";

import roundImage from "../../../res/images/round-small.png";
import email from "../../../res/icons/email.png";
import linkedin from "../../../res/icons/linkedin.png";
import location from "../../../res/icons/location.png";
import phone from "../../../res/icons/phone.png";

function GenInfo() {
  return (
    <Card>
      <div className="imageAndDetails">
        <div style={{ marginLeft: "3vw" }}>
          <div>
            <h1>Martynas Podenas</h1>
            <ContactLine
              image={location}
              text={"Herisau, 9100, Switzerland"}
              altImage={"Location Icon"}
              link={"https://goo.gl/maps/PVz76pSZckoQ9kYW7"}
            />
            <ContactLine
              image={phone}
              text={"+41 76 262 14 64"}
              altImage={"Phone Icon"}
            />
            <ContactLine
              image={email}
              text={"martis.podenas@gmail.com"}
              altImage={"Email Icon"}
            />
            <ContactLine
              image={linkedin}
              text={"Martynas Podenas"}
              altImage={"LinkedIn Icon"}
              link={
                "https://www.linkedin.com/in/martynas-pod%C4%97nas-140813192/"
              }
            />
          </div>
        </div>
        <div className="imageHolder">
            <img src={roundImage} />
        </div>
      </div>
    </Card>
  );
}

export default GenInfo;
