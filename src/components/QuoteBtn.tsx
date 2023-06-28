import React from "react";
import Phone from "../assets/images/phone.png";

export default function QuoteBtn() {
  return (
    <div>
      <button
        className={`flex items-center gap-1 bg-[#0D584C] hover:bg-blue-300 text-white font-sans text-sm py-2 px-4 w-[160px] h-[40px] rounded-full border-none`}
      >
        <img src={Phone} className={`w-6 h-6`} />
        Get Free Quote
      </button>
    </div>
  );
}
