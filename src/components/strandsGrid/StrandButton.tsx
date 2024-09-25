import { Alphabet } from "@/types";

interface StrandButtonProps {
  alphabet: Alphabet;
  onClick: () => void;
  buttonSize: number;
}

const StrandButton = ({ alphabet, buttonSize, onClick }: StrandButtonProps) => {
  return (
    <button
      className={`w-[${buttonSize}px] h-[${buttonSize}px] rounded-full hover:shadow-lg shadow-black/50 uppercase text-xl transition-all duration-50 ease-in-out`}
      onClick={onClick}
    >
      {alphabet}
    </button>
  );
};

export default StrandButton;
