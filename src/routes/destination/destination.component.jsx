import "./destination.styles.scss";
import data from "../../data.json";
import DestinationSlider from "../../components/sliderpage/slider-destination/slider-destination.component";
import PageTitle from "../../components/page-title/page-title.component";
import { useState } from "react";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";

const Destination = () => {
  const pageTitle = ["01", "PICK YOUR DESTINATION"];
  const sliderMenu = ["MOON", "MARS", "EUROPA", "TITAN"];
  const images = [moon, mars, europa, titan];

  document.body.className = "";
  document.body.classList.add("destination-background");

  var [activeSlide, setActiveSlide] = useState(0);

  const pageData = data.destinations;

  const handleActiveSlide = (clickedSlide) => {
    setActiveSlide(clickedSlide);

    document
      .querySelector(".slider-destination-active")
      .classList.remove("slider-destination-active");

    document
      .querySelectorAll(".slider-item")
      [clickedSlide].classList.add("slider-destination-active");
  };

  return (
    <div className="destination-container">
      <PageTitle pagetitle={pageTitle} />
      <img
        className="slider-image"
        src={images[activeSlide]}
        alt={images[activeSlide]}
      />
      <div className="slider-content">
        <div className="slider-container">
          {sliderMenu.map((slideTitle, iteration) => (
            <button
              className={
                iteration === 0
                  ? `slider-item slider-item-${iteration} slider-destination-active`
                  : `slider-item slider-item-${iteration}`
              }
              key={`slider-item-${iteration}`}
              to=""
              onClick={() => handleActiveSlide(iteration)}
            >
              {slideTitle}
            </button>
          ))}
        </div>
        <DestinationSlider
          key={sliderMenu[activeSlide]}
          slideTitle={sliderMenu[activeSlide]}
          slideDescription={pageData[activeSlide].description}
          slideDistance={pageData[activeSlide].distance}
          slideTravel={pageData[activeSlide].travel}
        />
      </div>
    </div>
  );
};

export default Destination;
