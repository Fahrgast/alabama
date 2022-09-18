import "./location.styles.scss";

const Location = ({ locationDescription, locationValue }) => {
  return (
    <div className="location">
      <p className="location__description">{locationDescription}</p>
      <h4 className="location__value">{locationValue}</h4>
    </div>
  );
};

export default Location;
