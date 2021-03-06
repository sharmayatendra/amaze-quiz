import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Categories } from "./pages/Categories/Categories";
import { Quiz } from "./pages/Quiz/Quiz";
import { Result } from "./pages/Result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/quiz/:quizId" element={<Quiz />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export { App };
