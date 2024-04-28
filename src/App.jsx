import { useState } from "react";
import AgeInputSection from "./components/AgeInputSection";
import ViewAge from "./components/ViewAge";

function App() {
  const [ageInputs, setAgeInputs] = useState({ day: "", month: "", year: "" });
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setAgeInputs({ ...ageInputs, [e.target.name]: e.target.value });
  };

  const calculateAge = () => {
    const { day, month, year } = ageInputs;
    if (day && month && year) {
      setAge(
        new Date().getFullYear() - new Date(year, month - 1, day).getFullYear()
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge();
  };
  return (
    <div className="container">
      <AgeInputSection
        ageInputs={ageInputs}
        setAgeInputs={setAgeInputs}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <ViewAge age={age} />
    </div>
  );
}

export default App;
