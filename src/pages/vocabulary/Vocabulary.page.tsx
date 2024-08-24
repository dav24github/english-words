import { LayoutContainer } from "@/style-components/layout-container";
import { useMemo, useState } from "react";
import { Input } from "@/components";
import { Filter, ListWords } from "./components";
import styles from "./Vocabulary.module.scss";
import dayjs from "dayjs";
import { useSectionWordsContextValue } from "@/hooks/useSectionContext";
import { useRangeWeek } from "@/hooks/useRangeWeek";
import { TypeTabs, WordEntity } from "@/types/types";
import { SectionWordsContext } from "@/context/SectionWordsCtx";
import { ListWordsDateSort } from "./components/ListWordsDateSort";
import { useDispatch } from "react-redux";
import { shuffleWords, sortWords } from "@/redux/states";

const initTabs: TypeTabs[] = [
  {
    label: "Recent",
    active: true,
  },
  {
    label: "Aleatorio",
    active: false,
  },
];

export const Vocabulary = () => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState<TypeTabs[]>(initTabs);
  const [search, setSearch] = useState("");
  const { value } = useSectionWordsContextValue();
  const { rangeWeek } = useRangeWeek();
  const wordsByRangeWeek: WordEntity[][] = useMemo(() => {
    const wordsByRangeWeekData: WordEntity[][] = [];
    rangeWeek.map((week) => {
      const listWordByWeek = value.words.filter(
        (obj) =>
          (dayjs(obj.createdAt).isAfter(dayjs(week[0])) ||
            dayjs(obj.createdAt).isSame(dayjs(week[0]))) &&
          (dayjs(obj.createdAt).isBefore(dayjs(week[6])) ||
            dayjs(obj.createdAt).isSame(dayjs(week[6])))
      );
      wordsByRangeWeekData.push(listWordByWeek);
    });
    return wordsByRangeWeekData;
  }, [value.words]);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const onTabChangeHandle = (data: TypeTabs[]) => {
    setTabs(data);
    if (data[0].active) dispatch(sortWords());
    if (data[1].active) dispatch(shuffleWords());
  };

  const filteredWords = value.words.filter((obj) =>
    obj.word.toLocaleLowerCase().includes(search)
  );

  return (
    <SectionWordsContext.Provider value={value}>
      <LayoutContainer>
        <div className={styles.search}>
          <Input
            hint="Buscar..."
            value={search}
            handleOnChange={handleOnChange}
            icon={<span className="material-symbols-outlined">search</span>}
          ></Input>
        </div>
        <Filter tabs={tabs} onTabChange={onTabChangeHandle}></Filter>
        {search !== "" ? (
          <ListWords words={filteredWords}></ListWords>
        ) : tabs[0].active ? (
          <ListWordsDateSort
            rangeWeek={rangeWeek}
            wordsByRangeWeek={wordsByRangeWeek}
          ></ListWordsDateSort>
        ) : (
          <ListWords words={value.words}></ListWords>
        )}
      </LayoutContainer>
    </SectionWordsContext.Provider>
  );
};
