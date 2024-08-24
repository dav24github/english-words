import { WordCtx } from "@/types/types";
import { createContext } from "react";

export const SectionWordsContext = createContext<WordCtx>({
  words: [],
  setWords: () => {},
});
