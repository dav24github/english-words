import { WordEntity } from "@/types/types";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
} & ChildrenProps;

export type TNewWordContext = {
  updateWords: WordEntity[];
  setUpdateWords: React.Dispatch<React.SetStateAction<WordEntity[]>>;
  engWord: { value: string; error: boolean };
  setEngWord: React.Dispatch<
    React.SetStateAction<{ value: string; error: boolean }>
  >;
  transWords: string[];
  setTransWords: React.Dispatch<React.SetStateAction<string[]>>;
  synonyms: string[];
  setSynonyms: React.Dispatch<React.SetStateAction<string[]>>;
};
