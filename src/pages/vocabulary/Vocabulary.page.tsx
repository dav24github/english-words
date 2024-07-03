import { LayoutContainer } from "@/style-components/layout-container";
import { useState } from "react";
import { Input } from "@/components";
import { Filter, ListWords } from "./components";
import styles from "./Vocabulary.module.scss";

export const Vocabulary = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <LayoutContainer>
      <div className={styles.search}>
        <Input
          hint="Buscar..."
          value={search}
          handleOnChange={handleOnChange}
          icon={<span className="material-symbols-outlined">search</span>}
        ></Input>
      </div>
      <Filter></Filter>
      <ListWords></ListWords>
    </LayoutContainer>
  );
};
