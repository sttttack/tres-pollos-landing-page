import { NavLink } from "react-router-dom";

export default function MainNav({ textColor, fontSize }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li
              className={`flex flex-col gap-6 font-semibold font-sans mt-6 md:mt-0 pl-6 pr-6 text-black md:flex md:z-10 md:flex-row lg:pl-0 lg:pr-0`}
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? `underline` : ``)}
                style={{ color: textColor, fontSize: fontSize }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? `underline` : ``)}
                style={{ color: textColor, fontSize: fontSize }}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? `underline` : ``)}
                style={{ color: textColor, fontSize: fontSize }}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? `underline` : ``)}
                style={{ color: textColor, fontSize: fontSize }}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
