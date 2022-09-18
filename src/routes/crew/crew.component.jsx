import "./crew.styles.scss";
import data from "../../data.json";
import { useState } from "react";
import PageTitle from "../../components/page-title/page-title.component";
import Slider from "../../components/sliderpage/slider/slider.component";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const pageTitle = ["02", "MEET YOUR CREW"];
  const images = [douglas, mark, victor, anousheh];
  var [activeSlide, setActiveSlide] = useState(0);
  const pageData = data.crew;

  document.body.className = "";
  document.body.classList.add("crew-background");

  const handleActiveSlide = (clickedSlide) => {
    setActiveSlide(clickedSlide);

    document.querySelector(".slider-active").classList.remove("slider-active");

    document
      .querySelectorAll(".slider-item")
      [clickedSlide].classList.add("slider-active");
  };

  return (
    <div className="crew">
      <PageTitle pagetitle={pageTitle} />{" "}
      <div className="crew-container">
        <img
          className="slider-image"
          src={images[activeSlide]}
          alt={pageData[activeSlide].name}
        />
        <div className="slider-dots">
          {images.map((slideTitle, iteration) => (
            <button
              className={
                iteration === 0
                  ? `slider-item slider-item-${iteration} slider-active`
                  : `slider-item slider-item-${iteration}`
              }
              key={`slider-item-${iteration}`}
              to=""
              onClick={() => handleActiveSlide(iteration)}
            ></button>
          ))}
        </div>
        <div className="slider-content">
          <div className="slider-container"></div>
          <Slider
            key={pageData[activeSlide].name}
            slideSubheading={pageData[activeSlide].role}
            slideTitle={pageData[activeSlide].name}
            slideDescription={pageData[activeSlide].bio}
            origin="crew"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
