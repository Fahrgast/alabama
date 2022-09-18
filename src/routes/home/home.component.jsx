import "./home.styles.scss";

const Home = () => {
  document.body.className = "";
  document.body.classList.add("home-background");

  return (
    <div className="hero-container">
      <div className="hero">
        <h5 className="hero__subheading">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="hero__heading">SPACE</h1>
        <p className="hero__text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="hero__button">EXPLORE</button>
    </div>
  );
};

export default Home;
