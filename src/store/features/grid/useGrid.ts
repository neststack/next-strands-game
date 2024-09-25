import { useCallback } from "react";
import {
  resetCurrentWord,
  setIsComplete,
  updateCorrectWords,
  updateCurrentWord,
  updateDisplayMessage
} from "@/store/features/grid/grid-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MessageType, StrandNodeType } from "@/types";

const useGrid = () => {
  const alphabets = useAppSelector(state => state.grid.alphabets);
  const correctWords = useAppSelector(state => state.grid.correctWords);
  const currentWord = useAppSelector(state => state.grid.currentWord);
  const displayMessage = useAppSelector(state => state.grid.displayMessage);
  const isMakingWord = useAppSelector(state => state.grid.isMakingWord);
  const isComplete = useAppSelector(state => state.grid.isComplete);
  const row = useAppSelector(state => state.grid.row);
  const column = useAppSelector(state => state.grid.column);
  const dispatch = useAppDispatch();

  //-----------------------------------
  // Functions
  const updateCurrentWordHandler = (strandNode: StrandNodeType) => {
    dispatch(updateCurrentWord(strandNode));
  };

  const resetCurrentWordHandler = () => {
    dispatch(resetCurrentWord());
  };

  const updateCorrectWordsHandler = (word: string) => {
    dispatch(updateCorrectWords(word));
  };

  const updateDisplayMessageHandler = useCallback(
    ({ message, type }: { message: string; type: MessageType }) => {
      dispatch(updateDisplayMessage({ message, type }));
    },
    [dispatch]
  );

  const setIsCompleteHandler = () => {
    dispatch(setIsComplete());
  };

  return {
    alphabets,
    column,
    correctWords,
    currentWord,
    displayMessage,
    isComplete,
    isMakingWord,
    resetCurrentWordHandler,
    row,
    setIsCompleteHandler,
    updateCorrectWordsHandler,
    updateCurrentWordHandler,
    updateDisplayMessageHandler
  };
};

export default useGrid;
