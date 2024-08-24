export type WordEntity = {
  id: string;
  word: string;
  translate: string[];
  synonyms: string[];
  open?: boolean;
  createdAt: string;
  upadtedAt: string;
};

export type WordCtx = {
  words: WordEntity[];
  setWords: React.Dispatch<React.SetStateAction<WordEntity[]>>;
};

export type TypeTabs = {
  label: string;
  active: boolean;
};
