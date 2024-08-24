export type ChildrenProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
} & ChildrenProps;

export type TNewWordContext = {
  engWord: string;
  setEngWord: React.Dispatch<React.SetStateAction<string>>;
  transWords: string[];
  setTransWords: React.Dispatch<React.SetStateAction<string[]>>;
  synonyms: string[];
  setSynonyms: React.Dispatch<React.SetStateAction<string[]>>;
};
