import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { Vocabulary } from "./pages/vocabulary/Vocabulary.page";
import { MainLayout } from "./components";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/control-center"
          element={<Vocabulary></Vocabulary>}
        ></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
