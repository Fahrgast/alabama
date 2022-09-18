import "./slider.styles.scss";

const Slider = ({ slideSubheading, slideTitle, slideDescription, origin }) => {
  return (
    <div className="slider">
      <div className="slider-content">
        <p
          className={`slider-content__subheading slider-content__subheading-${origin}`}
        >
          {slideSubheading}
        </p>
        <h4 className="slider-content__heading">{slideTitle}</h4>
        <p className="slider-content__text">{slideDescription}</p>
      </div>
    </div>
  );
};

export default Slider;
