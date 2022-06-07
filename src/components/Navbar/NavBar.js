import React from "react";
import c from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
const navBarMenu = [
  "Home",
  "Features",
  "Pages",
  "ScreenShots",
  "Pricing",
  "Contact",
];
export default function NavBar() {
  return (
    <div className={c.NavBarContainer}>
      <div className={c.purpleBox}></div>
      <nav className={c.navBar}>
        <ul>
          {navBarMenu.map((page, i) => {
            return (
              <li key={page}>
                <NavLink to="/">{page}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
