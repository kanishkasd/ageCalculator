const ViewAge = ({ age }) => {
  const { day, month, year } = age;

  const birthDate = new Date(`${year}-${month}-${day}`);
  const now = new Date();

  // Calculate the difference in milliseconds
  let diff = now - birthDate;

  // Calculate the number of milliseconds in a day, month, and year
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerMonth = msPerDay * 30.436875; // Average number of days in a month
  const msPerYear = msPerDay * 365.25; // Average number of days in a year

  // Calculate the age in years
  let years = Math.floor(diff / msPerYear);
  diff -= years * msPerYear;

  // Calculate the age in months
  let months = Math.floor(diff / msPerMonth);
  diff -= months * msPerMonth;

  // Calculate the age in days
  let days = Math.floor(diff / msPerDay);

  return (
    <div className="viewSection">
      <h1 className="displayWords">
        <span className="displayAge">{years ? years : "--"}</span>years
      </h1>
      <h1 className="displayWords">
        <span className="displayAge">{months ? months : "--"}</span>months
      </h1>
      <h1 className="displayWords">
        <span className="displayAge">{days ? days : "--"}</span>days
      </h1>
    </div>
  );
};

export default ViewAge;
