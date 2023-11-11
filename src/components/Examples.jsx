import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSeletectedTopic] = useState("");
  const handleClick = (selectedTopic) => {
    if (selectedTopic) {
    }
    setSeletectedTopic(selectedTopic);
  };

  let tabContent = <p>Please select a content!</p>;

  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleClick("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleClick("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleClick("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleClick("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
