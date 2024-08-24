import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { Vocabulary } from "./pages/vocabulary/Vocabulary.page";
import { MainLayout } from "./components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { replaceWords } from "./redux/states";
import { sortData } from "./utils/sort-array";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { LoadingService } from "./services/loading.service";

function App() {
  const dispatch = useDispatch();
  const [init, setInit] = useState<boolean>(false);

  const fetchPost = async () => {
    LoadingService.setSubject(true);
    await getDocs(collection(db, "english")).then((querySnapshot) => {
      const vocabulary = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      LoadingService.setSubject(false);
      dispatch(
        replaceWords(sortData([...vocabulary], "createdAt", "ASC", true))
      );
      setInit(true);
    });
  };

  useEffect(() => {
    fetchPost();
    signIn();
  }, []);

  const signIn = async () => {
    await signInWithEmailAndPassword(
      auth,
      "Davidthbsossa1@gmail.com",
      "David2411"
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
  };

  return (
    <MainLayout>
      <LoadingSpinner />
      {init && (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vocabulary" element={<Vocabulary />}></Route>
        </Routes>
      )}
    </MainLayout>
  );
}

export default App;
