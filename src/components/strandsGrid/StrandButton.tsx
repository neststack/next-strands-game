import { Alphabet } from "@/types";

interface StrandButtonProps {
  alphabet: Alphabet;
  onClick: () => void;
  buttonSize: number;
  blockSize: number;
}

const StrandButton = ({
  alphabet,
  blockSize,
  buttonSize,
  onClick
}: StrandButtonProps) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: `${blockSize}px`,
        width: `${blockSize}px`
      }}
    >
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
    </div>
  );
};

export default StrandButton;
