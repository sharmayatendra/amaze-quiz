import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./context/quiz-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <QuizProvider>
      <App />
    </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
