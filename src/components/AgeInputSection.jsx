import buttonIcon from "../assets/images/icon-arrow.svg";
const AgeInputSection = () => {
  return (
    <>
      <form className="inputAge">
        <div className="form-row">
          <label htmlFor="day" className="label">
            DAY
          </label>
          <input
            type="number"
            className="inputField"
            id="day"
            name="day"
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
            required
          />
        </div>
        <button className="calculateButton" type="button">
          <img src={buttonIcon} alt="button-icon" />
        </button>
      </form>
      <hr className="hr" />
    </>
  );
};

export default AgeInputSection;
