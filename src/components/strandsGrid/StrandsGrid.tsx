"use client";

import { useEffect, useMemo } from "react";
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
    correctWords,
    currentWord,
    displayMessage,
    resetCurrentWordHandler,
    row,
    setIsCompleteHandler,
    updateCorrectWordsHandler,
    updateCurrentWordHandler,
    updateDisplayMessageHandler
  } = useGrid();

  //-----------------------------------
  // Computed
  const correctPlotStrings = useMemo(
    () => correctWords.map(el => el.plotString),
    [correctWords]
  );

  //-----------------------------------
  // Functions
  const buttonClickHandler = ({
    alphabet,
    column,
    id,
    row
  }: StrandNodeType) => {
    // if the local plot is empty, add the current node to the plot
    if (currentWord.length === 0) {
      updateCurrentWordHandler({
        alphabet,
        column,
        id,
        row
      });
      return;
    }

    // get last node indexes
    const lastNode = currentWord[currentWord.length - 1];
    const lastNodeIndexes = {
      column: lastNode.column,
      id: lastNode.id,
      row: lastNode.row
    };

    // if the last node is the same as the current node, end path and validate
    if (
      lastNodeIndexes.column === column &&
      lastNodeIndexes.id === id &&
      lastNodeIndexes.row === row
    ) {
      validateWordHandler();
      return;
    }

    // if the last node is not adjacent to the current node, clear path
    if (
      Math.abs(lastNodeIndexes.column - column) > 1 ||
      Math.abs(lastNodeIndexes.row - row) > 1
    ) {
      updateDisplayMessageHandler({
        message: " ",
        type: "info"
      });
      resetCurrentWordHandler();
      return;
    }

    // Else
    updateCurrentWordHandler({
      alphabet,
      column,
      id,
      row
    });
  };

  const validateWordHandler = () => {
    console.log("validateWordHandler", { correctPlotStrings, currentWord });
    // if the current word is not in the correct words list, reset the current word
    if (
      !correctPlotStrings.includes(currentWord.map(node => node.id).join("_"))
    ) {
      updateDisplayMessageHandler({
        message: "Incorrect",
        type: "info"
      });
      resetCurrentWordHandler();
      return;
    }

    // if the current word is in the correct words list, make the current correct word active
    if (
      correctPlotStrings.includes(currentWord.map(node => node.id).join("_"))
    ) {
      const correctWord = correctWords.find(
        correctWord =>
          correctWord.plotString === currentWord.map(node => node.id).join("_")
      );

      console.log("Correct", { correctWord });

      if (!correctWord) return;

      updateCorrectWordsHandler(correctWord.word);
      updateDisplayMessageHandler({
        message: currentWord.map(node => node.alphabet).join(""),
        type: correctWord.isSpangram ? "spangram" : "correct"
      });
      resetCurrentWordHandler();
      return;
    }
  };

  useEffect(() => {
    if (currentWord.length === 0) return;

    const message = currentWord.map(node => node.alphabet).join("");

    updateDisplayMessageHandler({
      message: message,
      type: "info"
    });
  }, [currentWord, updateDisplayMessageHandler]);

  useEffect(() => {
    if (correctWords.every(word => word.found)) {
      updateDisplayMessageHandler({
        message: "You Win!",
        type: "correct"
      });
      setIsCompleteHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctWords]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1
        className={`uppercase h-10 text-center text-xl ${
          displayMessage.type === "correct"
            ? "text-blue-500"
            : displayMessage.type === "spangram"
              ? "text-orange-500"
              : "text-gray-500"
        }`}
      >
        {displayMessage.message}
      </h1>
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
          currentPlot={currentWord}
          row={row}
        />
        {correctWords
          .filter(currentWord => currentWord.found)
          .map((correctWord, i) => (
            <DrawSvg
              key={i}
              buttonSize={BUTTON_SIZE}
              column={column}
              currentPlot={correctWord.plot}
              row={row}
              type={correctWord.isSpangram ? "spangram" : "correct"}
            />
          ))}
      </div>
    </div>
  );
};

export default Grid;
