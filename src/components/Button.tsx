import ArrowFw from "../assets/images/arrow-forward.png";
import "../components/AnimationStyles.css";

interface ButtonProps {
  buttonText: string;
}

export default function Button({ buttonText }: ButtonProps) {
  return (
    <div>
      <button
        className={`bg-[#E0B20B] flex items-center gap-2 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded animate-slideUp`}
      >
        <img src={ArrowFw} className={`w-6 h-6`} />
        {buttonText}
      </button>
    </div>
  );
}
