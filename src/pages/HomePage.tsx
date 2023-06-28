import React from "react";
import Button from "../components/Button";
import backgroundImage from "../assets/images/poultrybg.jpg";
import MainComponent2 from "../components/MainComponent2";

export default function HomePage() {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-col w-auto h-[80vh] md:h-[100vh] bg-cover `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className={` top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-6`}
        >
          <h1 className={`font-ribeye text-[52px] text-white text-center`}>
            Welcome to Tres Pollo's farm!
          </h1>
          <p className={`text-[#EDECD8] text-center text-lg tracking-wide`}>
            All of our chickens are grown in the Valley of Mukhrani.
          </p>
          <Button buttonText={"Get more info"} />
        </div>
      </div>
      <MainComponent2 />
    </>
  );
}
