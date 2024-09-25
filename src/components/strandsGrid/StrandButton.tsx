import { Alphabet } from "@/types";

interface StrandButtonProps {
  alphabet: Alphabet;
  onClick: () => void;
}

const StrandButton = ({ alphabet, onClick }: StrandButtonProps) => {
  return (
    <button
      className="w-[44px] h-[44px] rounded-full hover:shadow-lg shadow-black/50 uppercase text-xl transition-all duration-50 ease-in-out"
      onClick={onClick}
    >
      {alphabet}
    </button>
  );
};

export default StrandButton;
