import { useState } from "react";
import AgeInputSection from "./components/AgeInputSection";
import ViewAge from "./components/ViewAge";

function App() {
  const [age, setAge] = useState("");

  const handleSubmit = ({ day, month, year }) => {
    setAge({ day, month, year });
  };
  return (
    <>
      <AgeInputSection onSubmit={handleSubmit} />
      <ViewAge age={age} />
    </>
  );
}

export default App;
