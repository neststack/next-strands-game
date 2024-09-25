import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alphabet, MessageType, StrandNodeType } from "@/types";

interface GridState {
  alphabets: Alphabet[][];
  correctWords: {
    found: boolean;
    isSpangram: boolean;
    word: string;
    plot: StrandNodeType[];
  }[];
  row: number;
  column: number;
  currentWord: StrandNodeType[];
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
    {
      found: false,
      isSpangram: false,
      plot: [
        {
          alphabet: "b",
          column: 0,
          id: "0-0",
          row: 0
        },
        {
          alphabet: "a",
          column: 1,
          id: "0-1",
          row: 0
        },
        {
          alphabet: "n",
          column: 0,
          id: "1-0",
          row: 1
        },
        {
          alphabet: "a",
          column: 1,
          id: "1-1",
          row: 1
        },
        {
          alphabet: "n",
          column: 2,
          id: "0-2",
          row: 0
        },
        {
          alphabet: "a",
          column: 3,
          id: "0-3",
          row: 0
        }
      ],
      word: "banana"
    },
    {
      found: false,
      isSpangram: false,
      plot: [
        {
          alphabet: "a",
          column: 2,
          id: "4-2",
          row: 4
        },
        {
          alphabet: "p",
          column: 3,
          id: "4-3",
          row: 4
        },
        {
          alphabet: "p",
          column: 3,
          id: "3-3",
          row: 3
        },
        {
          alphabet: "l",
          column: 3,
          id: "2-3",
          row: 2
        },
        {
          alphabet: "e",
          column: 2,
          id: "3-2",
          row: 3
        }
      ],
      word: "apple"
    },
    {
      found: false,
      isSpangram: false,
      plot: [
        {
          alphabet: "l",
          column: 1,
          id: "4-1",
          row: 4
        },
        {
          alphabet: "i",
          column: 0,
          id: "3-0",
          row: 3
        },
        {
          alphabet: "m",
          column: 0,
          id: "4-0",
          row: 4
        },
        {
          alphabet: "e",
          column: 1,
          id: "3-1",
          row: 3
        }
      ],
      word: "lime"
    },
    {
      found: false,
      isSpangram: true,
      plot: [
        {
          alphabet: "f",
          column: 0,
          id: "2-0",
          row: 2
        },
        {
          alphabet: "r",
          column: 1,
          id: "2-1",
          row: 2
        },
        {
          alphabet: "u",
          column: 2,
          id: "2-2",
          row: 2
        },
        {
          alphabet: "i",
          column: 2,
          id: "1-2",
          row: 1
        },
        {
          alphabet: "t",
          column: 3,
          id: "1-3",
          row: 1
        }
      ],
      word: "fruit"
    }
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
    updateCurrentWord(state, action: PayloadAction<StrandNodeType>) {
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
