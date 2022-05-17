import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Categories } from "./pages/Categories/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      {/* <Mockman colorScheme="dark" /> */}
    </Routes>
  );
}

export { App };
