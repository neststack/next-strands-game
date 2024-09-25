"use client";

import useGrid from "@/store/features/grid";
import DrawSvg from "./DrawSvg";
import StrandButton from "./StrandButton";

const SIZE = 44;

const Grid = () => {
  const {
    alphabets,
    column,
    row
    // correctWords,
    // currentWord,
    // displayMessage,
    // isComplete,
    // isMakingWord,
    // updateCorrectWordsHandler,
    // updateCurrentWordHandler,
    // updateDisplayMessageHandler
  } = useGrid();

  //-----------------------------------
  // Computed

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Grid</h1>
      <div className="flex flex-col items-center justify-between gap-3 relative">
        {alphabets.map((row, index) => (
          <div
            key={index}
            className="flex 
             justify-between items-center gap-3"
          >
            {row.map((letter, index) => (
              <StrandButton
                key={index}
                alphabet={letter}
                onClick={() => console.log(letter)}
              />
            ))}
          </div>
        ))}
        <DrawSvg column={column} row={row} size={SIZE} />
      </div>
    </div>
  );
};

export default Grid;
