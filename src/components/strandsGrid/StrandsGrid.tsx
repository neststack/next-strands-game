"use client";

import { useState } from "react";
import useGrid from "@/store/features/grid";
import { StrandNodeType } from "@/types";
import DrawSvg from "./DrawSvg";
import StrandButton from "./StrandButton";

// Constants
const BUTTON_SIZE = 44;

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
  const [localPlot, setLocalPlot] = useState<StrandNodeType[]>([]);

  const buttonClickHandler = ({
    alphabet,
    column,
    id,
    row
  }: StrandNodeType) => {
    // if the local plot is empty, add the current node to the plot
    if (localPlot.length === 0) {
      setLocalPlot([
        {
          alphabet,
          column,
          id,
          row
        }
      ]);
      return;
    }

    // get last node indexes
    // const lastNode = localPlot[localPlot.length - 1];
    // const lastNodeIndexes = {
    //   column: lastNode.column,
    //   row: lastNode.row
    // };

    // if the last node is the same as the current node, end path and validate

    // if the last node is not adjacent to the current node, clear path

    setLocalPlot(prev => [
      ...prev,
      {
        alphabet,
        column,
        id,
        row
      }
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Grid</h1>
      <div className="flex flex-col items-center justify-between gap-3 relative">
        {alphabets.map((row, i) => (
          <div
            key={i}
            className="flex 
             justify-between items-center gap-3"
          >
            {row.map((alphabet, j) => (
              <StrandButton
                key={`${i}-${j}`}
                alphabet={alphabet}
                buttonSize={BUTTON_SIZE}
                onClick={() =>
                  buttonClickHandler({
                    alphabet,
                    column: j,
                    id: `${i}-${j}`,
                    row: i
                  })
                }
              />
            ))}
          </div>
        ))}
        <DrawSvg
          buttonSize={BUTTON_SIZE}
          column={column}
          row={row}
          temporaryPlot={localPlot}
        />
      </div>
    </div>
  );
};

export default Grid;
