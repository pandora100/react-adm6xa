/* Tutorial at https://youtu.be/MAD2HnUFjgg */

import React, { useState, useEffect } from "react";
import AccordionElement from "../components/AccordionElement";

function Accordion(props) {
  const [ActiveKey, setActiveKey] = useState(props.defaultExpand);

  useEffect(() => {
    const AccordionContainer = document.querySelector(`#${props.uniqueId}`);

    //handle button
    let ActiveButton = AccordionContainer.querySelector(".button-active");
    if (ActiveButton) {
      ActiveButton.classList.remove("button-active");
    }
    AccordionContainer.querySelector(
      `.accordion-button__${ActiveKey}`
    ).classList.add("button-active");

    //handle content
    let ActiveContent = AccordionContainer.querySelector(".content-active");
    if (ActiveContent) {
      ActiveContent.style.maxHeight = 0;
      ActiveContent.classList.remove("content-active");
    }
    ActiveContent = AccordionContainer.querySelector(
      `.accordion-content__${ActiveKey}`
    );
    ActiveContent.style.maxHeight = `${ActiveContent.scrollHeight}px`;
    ActiveContent.classList.add("content-active");

    //handle Chevron
    if (props.showChevron) {
      let ActiveChevron = AccordionContainer.querySelector(".chevron-active");
      if (ActiveChevron) {
        ActiveChevron.classList.remove("chevron-active");
      }
      ActiveChevron = AccordionContainer.querySelector(
        `.accordion-chevron__${ActiveKey}`
      );
      ActiveChevron.classList.add("chevron-active");
    }
    //'props.showChevron' and 'props.uniqueId' are not dependencies
  }, [ActiveKey]);

  function changeActiveSection(accKey) {
    setActiveKey(accKey);
  }

  return (
    <div id={props.uniqueId}>
      {props.elements.map((el, ind) => {
        return (
          <AccordionElement
            delay={props.delay}
            title={el.title}
            content={el.content}
            check={changeActiveSection}
            accKey={ind}
            key={`${props.uniqueId}_${ind}`}
            showChevron={props.showChevron}
          />
        );
      })}
    </div>
  );
}

export default Accordion;