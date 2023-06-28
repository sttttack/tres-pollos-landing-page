import React from "react";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div
      className={`flex justify-center items-center flex-col h-[100vh] bg-gray-600`}
    >
      <div className={`flex flex-col justify-center items-center gap-6`}>
        <h1 className={`font-ribeye text-[48px] text-center`}>
          Welcome to Tres Pollo's farm!
        </h1>
        <p className={`text-[#EDECD8] text-center`}>
          All of our chickens are grown in the Valley of Mukhrani.
        </p>
        <Button buttonText={"Get more info"} />
      </div>
    </div>
  );
}
