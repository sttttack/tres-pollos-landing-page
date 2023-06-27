import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li
              className={`flex flex-col gap-6 font-bold font-sans mt-6 pl-6 pr-6 text-white`}
            >
              <NavLink to="/" className={`hover:underline`}>
                Home
              </NavLink>
              <NavLink to="/about" className={`hover:underline`}>
                About
              </NavLink>
              <NavLink to="/services" className={`hover:underline`}>
                Services
              </NavLink>
              <NavLink to="/contact" className={`hover:underline`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
