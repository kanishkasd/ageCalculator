import { useState } from "react";
import AgeInputSection from "./components/AgeInputSection";
import ViewAge from "./components/ViewAge";

function App() {
  const [ageInputs, setAgeInputs] = useState({ day: "", month: "", year: "" });

  const handleInputChange = (e) => {
    setAgeInputs({ ...ageInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <AgeInputSection
        ageInputs={ageInputs}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <ViewAge />
    </div>
  );
}

export default App;
