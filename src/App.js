import React,{Fragment,useState} from "react";
import "./style.css";
import Accordion from "./components/Accordion";

// Custom contents for the accordion
import Paragraph from "./components/Paragraph";



export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>Accordion Example</h1>
      <h2>
        By{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://www.darshanbaral.com/"
        >
          Darshan
        </a>
        . Fork{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/darshanbaral/react-accordion"
        >
          here
        </a>
        .
      </h2>
      <Accordion
        uniqueId="appleBerryIsPrettyGood"
        delay="0.5s"
        showChevron={true}
        elements={[
          { title: "title1", content: <Paragraph content="apple is ok." /> },
          { title: "title2", content: <Paragraph content="apple is good." /> },
          { title: "title3", content: <Paragraph content="apple is fine." /> }
        ]}
        defaultExpand={0} //index of 'elements' to expand at the beginning
      />
    </div>
);
}