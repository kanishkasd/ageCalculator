import { useState } from "react";
import buttonIcon from "../assets/images/icon-arrow.svg";
const AgeInputSection = ({ onSubmit }) => {
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ day, year, month });
  };

  return (
    <>
      <form className="inputAge" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="day" className="label">
            DAY
          </label>
          <input
            type="number"
            className="inputField"
            id="day"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="DD"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="month" className="label">
            MONTH
          </label>
          <input
            type="number"
            id="month"
            className="inputField"
            name="month"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="year" className="label">
            YEAR
          </label>
          <input
            type="number"
            id="year"
            className="inputField"
            name="year"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button
          className="calculateButton"
          type="button"
          onClick={handleSubmit}
        >
          <img src={buttonIcon} alt="button-icon" />
        </button>
      </form>
      <hr className="hr" />
    </>
  );
};

export default AgeInputSection;
