import React from "react";
import ArrowFw from "../assets/images/arrow-forward.png";

export default function Button({ buttonText }) {
  return (
    <div>
      <button
        className={`bg-[#E0B20B] flex items-center gap-2 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded`}
      >
        <img src={ArrowFw} className={`w-6 h-6`} />
        {buttonText}
      </button>
    </div>
  );
}
