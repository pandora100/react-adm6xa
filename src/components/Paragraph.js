import React from "react";

function Paragraph(props) {
  return (
    <div
      className="accordion-text"
      style={{ padding: "15px", border: "solid 1px black", margin: "5px" }}
    >
      <p>{props.content}</p>
    </div>
  );
}

export default Paragraph;