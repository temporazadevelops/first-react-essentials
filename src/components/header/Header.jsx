import reactLogo from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactValues = ["Fundamental", "Core", "Crucial"];

function randomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const symbolizeWord = reactValues[randomIndex(reactValues.length - 1)];
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {symbolizeWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
