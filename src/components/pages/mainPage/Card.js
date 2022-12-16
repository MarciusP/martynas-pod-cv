import React from "react";
import "./mainPage.scss";

function Card(props) {
  return (
    <div
      className="cardHolder"
      style={
        props.title !== undefined
          ? {
              padding: "3vh 2vw",
              paddingTop: "1.5vh",
            }
          : { padding: "3vh 2vw" }
      }
    >
      {props.title !== undefined ? (
        <>
          <div className="cardTitle">{props.title}</div>
          <hr />
        </>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  );
}

export default Card;
