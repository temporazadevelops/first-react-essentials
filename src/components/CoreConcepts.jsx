import { CORE_CONCEPTS } from "../data";
import CoreComponent from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((element, index) => {
          return <CoreComponent key={index} {...element} />;
        })}
      </ul>
    </section>
  );
}
