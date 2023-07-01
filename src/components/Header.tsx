import { useState } from "react";
import Hamburger from "hamburger-react";
import MainNav from "./MainNav";
import QuoteBtn from "./QuoteBtn";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="bg-[#E0B10B] text-xl absolute w-full h-12 flex justify-between items-center z-10 tracking-wide">
          <div
            className={`p-4 flex items-center md:justify-between w-full lg:ml-[4.0vw] lg:mr-[4.0vw] 2xl:ml-[15vw] 2xl:mr-[15vw]`}
          >
            <h1 className={`font-osita text-red-600`}>Tres Pollos</h1>
            <div className={`hidden md:flex font-ribeye items-center gap-4`}>
              <MainNav textColor="black" fontSize="14px" />
              <QuoteBtn />
            </div>
          </div>
          <div className={`p-4 md:hidden`}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        <div
          className={`bg-[#c79e5c] w-full h-[50vh] absolute top-12 transition-transform duration-500 ease-in-out transform lg:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-[100%]"
          }`}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: isOpen ? 10 : -1,
          }}
        >
          <MainNav textColor="black" fontSize="16px" />
        </div>
      </div>
    </>
  );
}
