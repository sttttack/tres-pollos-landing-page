import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

interface TextProps {
  text: string;
}

export default function Modal({ text }: TextProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        Read more...
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative  w-[90vw] md:w-[450px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-end bg-white outline-none focus:outline-none">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 pt-4 pb-2 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <TfiClose />
                </button>
                <div className="flex items-start  border-b border-solid border-slate-200 rounded-t"></div>
                <div className="relative pl-6 pr-6 flex-auto">
                  <p className="mb-4 text-slate-500 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
