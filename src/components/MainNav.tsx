import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li
              className={`flex flex-col gap-6 font-bold font-ribeye mt-6 pl-6 pr-6`}
            >
              <NavLink to="/" className={`border-b-2 border-[#987b65]`}>
                Home
              </NavLink>
              <NavLink to="/about" className={`border-b-2 border-[#987b65]`}>
                About
              </NavLink>
              <NavLink to="/services" className={`border-b-2 border-[#987b65]`}>
                Services
              </NavLink>
              <NavLink to="/contact" className={`border-b-2 border-[#987b65]`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
