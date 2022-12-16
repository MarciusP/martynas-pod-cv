import React from "react";
import "./mainPage.scss";

function ContactLine(props) {
  const { image, text, altImage, link } = props;

  const handleClick = () =>{

    if(link !== undefined){
        window.open(
            link,
            '_blank'
          );
    }
  }

  return (
    <div className="contactLine" onClick={() => handleClick()} style={link !== undefined ? {cursor: "pointer"} : {}}>
      <img src={image} alt={altImage} />
      <div>{text}</div>
    </div>
  );
}

export default ContactLine;
