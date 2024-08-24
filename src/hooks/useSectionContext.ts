import { wordAdapter } from "@/adapter/word.adapter";
import { IRootState } from "@/redux/store";
import { WordEntity } from "@/types/types";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const useSectionWordsContextValue = () => {
  const storeWords = useSelector((state: IRootState) => state.words);
  const [words, setWords] = useState<WordEntity[]>([]);

  useEffect(() => {
    setWords(wordAdapter(storeWords));
  }, [storeWords]);

  const value = useMemo(
    () => ({
      words,
      setWords,
    }),
    [words]
  );

  return { value };
};
