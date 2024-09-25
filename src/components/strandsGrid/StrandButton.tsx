import { Alphabet } from "@/types";

interface StrandButtonProps {
  alphabet: Alphabet;
  onClick: () => void;
  buttonSize: number;
}

const StrandButton = ({ alphabet, buttonSize, onClick }: StrandButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center w-[${buttonSize}px] h-[${buttonSize}px] rounded-full hover:shadow-lg shadow-black/50 uppercase text-xl transition-all duration-50 ease-in-out`}
      style={{
        height: `${buttonSize}px`,
        width: `${buttonSize}px`
      }}
      onClick={onClick}
    >
      {alphabet}
    </button>
  );
};

export default StrandButton;
