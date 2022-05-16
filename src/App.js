import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>

      {/* <Mockman colorScheme="dark" /> */}
    </Routes>
  );
}

export { App };
