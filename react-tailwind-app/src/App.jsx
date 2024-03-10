import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex flex-col items-center mt-8 mb-16">
        <h1 className="text-3xl font-bold mt-2">React & Tailwind</h1>
      </header>
    </>
  );
}

export default App;
