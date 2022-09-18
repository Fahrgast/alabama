import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

import { Fragment, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const navData = [
  { label: "Home", to: "/", id: "00" },
  { label: "Destination", to: "/destination", id: "01" },
  { label: "Crew", to: "/crew", id: "02" },
  { label: "Technology", to: "/technology", id: "03" },
];

const Navigation = () => {
  const [navbarToggled, toggleNavbar] = useState(false);

  const handleNavToggle = () => {
    toggleNavbar(!navbarToggled);
    const navigationContainer = document.querySelector(".navigation-container");
    const navLinkContainer = document.querySelector(".nav-links-container");
    const navLinkStyle = getComputedStyle(navLinkContainer);
    if (navLinkStyle.display === "none") {
      navLinkContainer.style.display = "flex";
      navigationContainer.classList.add("toggled");
    } else {
      navLinkContainer.style.display = "none";
      navigationContainer.classList.remove("toggled");
    }
  };

  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/" alt="logo">
          <Logo className="logo" />
        </NavLink>
        <hr className="navigation__line"></hr>
        <div className="navigation-container">
          <img
            className="navbar-icon"
            alt="toggle mobile menu"
            onClick={() => handleNavToggle()}
            src={navbarToggled ? closeIcon : hamburger}
          />
          <div className="nav-links-container">
            {navData.map((navitem) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                  to={navitem.to}
                  key={navitem.id}
                >
                  <span>{navitem.id}</span> {navitem.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
