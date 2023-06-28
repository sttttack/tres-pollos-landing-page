import { useState } from "react";
import Hamburger from "hamburger-react";
import MainNav from "./MainNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#E0B10B] text-xl fixed w-full h-12 flex justify-between items-center z-10 font-osita tracking-wide">
        <div
          className={`p-4 flex items-center md:justify-between w-full lg:ml-[15vw] lg:mr-[15vw]`}
        >
          <h1>Tres Pollos</h1>
          <div className={`hidden md:flex font-ribeye`}>
            <MainNav />
          </div>
        </div>
        <div className={`p-4 md:hidden`}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <div
        className={`bg-[#A5895C] fixed w-full h-[50vh] top-12 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MainNav />
      </div>
    </div>
  );
}
