import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { ControlCenter } from "./pages/control-center/ControlCenter.page";
import { Home } from "./pages/home/Home.page";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/control-center"
          element={<ControlCenter></ControlCenter>}
        ></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
