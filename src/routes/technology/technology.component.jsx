import "./technology.styles.scss";
import data from "../../data.json";
import { useState } from "react";
import PageTitle from "../../components/page-title/page-title.component";
import Slider from "../../components/sliderpage/slider/slider.component";

import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const pageTitle = ["03", "SPACE LAUNCH 101"];
  const imagesLandscape = [
    launchVehicleLandscape,
    spaceportLandscape,
    capsuleLandscape,
  ];
  const imagesPortrait = [
    launchVehiclePortrait,
    spaceportPortrait,
    capsulePortrait,
  ];
  var [activeSlide, setActiveSlide] = useState(0);
  const pageData = data.technology;

  document.body.className = "";
  document.body.classList.add("crew-background");

  const handleActiveSlide = (clickedSlide) => {
    setActiveSlide(clickedSlide);

    document.querySelector(".slider-active").classList.remove("slider-active");

    document
      .querySelectorAll(".slider-number")
      [clickedSlide].classList.add("slider-active");
  };

  var screenWidth = document.body.clientWidth;
  var largeScreen = false;
  if (screenWidth > 992) largeScreen = true;

  return (
    <div className="technology">
      <PageTitle pagetitle={pageTitle} />
      <div className="technology-container">
        <img
          className="slider-image"
          src={
            largeScreen
              ? imagesPortrait[activeSlide]
              : imagesLandscape[activeSlide]
          }
          alt={pageData[activeSlide].name}
        />

        <div className="slider-numbers">
          {imagesLandscape.map((slideTitle, iteration) => (
            <button
              className={
                iteration === 0
                  ? `slider-number slider-number-${iteration} slider-active`
                  : `slider-number slider-number-${iteration}`
              }
              key={`slider-number-${iteration}`}
              to=""
              onClick={() => handleActiveSlide(iteration)}
            >
              {iteration + 1}
            </button>
          ))}
        </div>

        <div className="slider-content">
          <p className="terminology">THE TERMINOLOGY...</p>
          <Slider
            key={pageData[activeSlide].name}
            slideSubheading={pageData[activeSlide].role}
            slideTitle={pageData[activeSlide].name}
            slideDescription={pageData[activeSlide].description}
            origin="crew"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
