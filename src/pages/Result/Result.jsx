import React from "react";
import { useQuiz } from "../../context/quiz-context";
import "./Result.css";
import { Nav } from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

const Result = () => {
  const {
    state: { quiz, answers },
    dispatch,
  } = useQuiz();

  const calculateScore = (quiz, answers) => {
    let score = 0;
    score = quiz.reduce(
      (acc, curr) =>
        curr.options.find((item) => item._id === answers[curr._id])?.isCorrect
          ? acc + 10
          : acc,
      score
    );
    return score;
  };
  return (
    <>
      <Nav />
      <div className="result-container">
        <h1>Quiz Result</h1>
        <h2>Final score: {calculateScore(quiz.mcqs, answers)}</h2>
        <h3>Total question: {quiz.mcqs.length}</h3>
        <div className="ques-opt-container">
          {quiz.mcqs.map((item) => (
            <div className="res-cont" key={item._id}>
              <h2>{item.question}</h2>

              {item.options.map((data) => (
                <button key={data._id}
                  className={`${data.isCorrect ? "correct-ans" : ""} ${
                    data._id === answers[item._id] && !data.isCorrect
                      ? "wrong-ans"
                      : ""
                  } btn`}
                >
                  {data.option}
                </button>
              ))}
            </div>
          ))}
        </div>
        <Link to="/">
          <button
            className="btn btn-primary-solid"
            onClick={() =>
              dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: 0 })
            }
          >
            Go to home
          </button>
        </Link>
      </div>
    </>
  );
};

export { Result };
