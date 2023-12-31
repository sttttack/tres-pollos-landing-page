import Button from "../components/Button";
import backgroundImage from "../assets/images/poultrybg.jpg";
import MainComponent2 from "../components/MainComponent2";
import "../components/AnimationStyles.css";

export default function HomePage() {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-col w-auto h-[100vh] md:h-[100vh] bg-cover `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className={` top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-8`}
        >
          <h1
            className={`font-ribeye text-[52px] text-white text-center animate-slideUp z-0`}
          >
            Welcome to{" "}
            <span className={`font-osita text-red-600`}>Tres Pollo's</span>{" "}
            farm!
          </h1>
          <p
            className={`text-[#EDECD8] text-center text-lg font-man font-semibold animate-slideUp pl-6 pr-6`}
          >
            All of our chickens are grown in the Valley of Mukhrani.
          </p>
          <Button buttonText={"Discover More"} />
        </div>
      </div>
      <MainComponent2 />
    </>
  );
}
