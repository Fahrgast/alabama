import "./slider-destination.styles.scss";
import Location from "./location/location.component";

const DestinationSlider = ({
  slideTitle,
  slideDescription,
  slideDistance,
  slideTravel,
}) => {
  return (
    <div className="slider slider-destination">
      <div className="slider-content">
        <h2 className="slider-destination-heading">{slideTitle}</h2>
        <p className="slider-destination-text">{slideDescription}</p>
        <div className="location-container">
          <Location
            locationDescription="AVG. DISTANCE"
            locationValue={slideDistance}
          />
          <Location
            locationDescription="EST. TRAVEL TIME"
            locationValue={slideTravel}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationSlider;
