import { WordEntity } from "@/types/types";
import { sortData } from "@/utils/sort-array";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const shuffleArray = (data: WordEntity[]): WordEntity[] => {
  const array = [...data];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const UserInitialState: WordEntity[] = [];

export const wordSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    replaceWords: (_, action: PayloadAction<WordEntity[]>): WordEntity[] => {
      return action.payload;
    },
    shuffleWords: (state): WordEntity[] => {
      return shuffleArray(state);
    },
    sortWords: (state): WordEntity[] => {
      return sortData(state, "createdAt", "ASC", true);
    },
    addWord: (state, action: PayloadAction<WordEntity>): WordEntity[] => {
      const newData = [...state];
      newData.unshift(action.payload);
      return newData;
    },
    updateWord: (state, action: PayloadAction<WordEntity>): WordEntity[] => {
      const newData = [...state];
      const index = newData.findIndex((obj) => obj.id === action.payload.id);
      newData[index] = { ...action.payload };
      return newData;
    },
    deleteWord: (state, action: PayloadAction<string>): WordEntity[] => {
      const newData = state.filter((obj) => obj.id !== action.payload);
      return newData;
    },
  },
});

export const {
  replaceWords,
  shuffleWords,
  addWord,
  sortWords,
  updateWord,
  deleteWord,
} = wordSlice.actions;
