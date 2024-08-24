export type ChildrenProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
} & ChildrenProps;

export type TNewWordContext = {
  engWord: { value: string; error: boolean };
  setEngWord: React.Dispatch<
    React.SetStateAction<{ value: string; error: boolean }>
  >;
  transWords: string[];
  setTransWords: React.Dispatch<React.SetStateAction<string[]>>;
  synonyms: string[];
  setSynonyms: React.Dispatch<React.SetStateAction<string[]>>;
};
