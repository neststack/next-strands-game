import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alphabet, LetterType, MessageType } from "@/types";

interface GridState {
  alphabets: Alphabet[][];
  correctWords: {
    found: boolean;
    isSpangram: boolean;
    word: string;
  }[];
  row: number;
  column: number;
  currentWord: LetterType[];
  isMakingWord: boolean;
  displayMessage: {
    message: string;
    type: MessageType;
  };
  isComplete: boolean;
}

const initialState: GridState = {
  alphabets: [
    ["b", "a", "n", "a"],
    ["n", "a", "i", "t"],
    ["f", "r", "u", "l"],
    ["i", "e", "e", "p"],
    ["m", "l", "a", "p"]
  ],
  column: 4,
  correctWords: [
    { found: false, isSpangram: false, word: "banana" },
    { found: false, isSpangram: false, word: "apple" },
    { found: false, isSpangram: false, word: "lime" },
    { found: false, isSpangram: true, word: "fruit" }
  ],
  currentWord: [],
  displayMessage: {
    message: "",
    type: "info"
  },
  isComplete: false,
  isMakingWord: false,
  row: 5
};

const gridSlice = createSlice({
  initialState,
  name: "grid",
  reducers: {
    // resetCurrentWord
    resetCurrentWord(state) {
      state.currentWord = [];
    },

    // updateCorrectWords
    updateCorrectWords(state, action: PayloadAction<string>) {
      const word = action.payload;
      const correctWord = state.correctWords.find(
        correctWord => correctWord.word === word
      );

      if (correctWord) {
        correctWord.found = true;
      }
    },

    // updateCurrentWord
    updateCurrentWord(state, action: PayloadAction<LetterType>) {
      state.currentWord.push(action.payload);
    },

    // updateDisplayMessage
    updateDisplayMessage(
      state,
      action: PayloadAction<{
        message: string;
        type: MessageType;
      }>
    ) {
      state.displayMessage = action.payload;
    }
  }
});

export const {
  resetCurrentWord,
  updateCorrectWords,
  updateCurrentWord,
  updateDisplayMessage
} = gridSlice.actions;
export const gridReducer = gridSlice.reducer;
