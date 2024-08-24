import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { Vocabulary } from "./pages/vocabulary/Vocabulary.page";
import { MainLayout } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { replaceWords } from "./redux/states";
import { VOCABULARY } from "./data/vocabulary";
import { sortData } from "./utils/sort-array";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(replaceWords(sortData([...VOCABULARY], "createdAt", "ASC", true)));
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vocabulary" element={<Vocabulary />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
