import { Nav } from "../../components/Nav/Nav";
import { useParams , Link } from "react-router-dom"
import "./Rules.css";
const Rules = ({setShowRules}) => {
//   const quizId = sessionStorage.getItem("quizId")

  const startHandler = () => {
      setShowRules(false);
  }

  return (
    <>
      {/* <Nav /> */}
      <div className="rulespage-container">
        <h1>Rules</h1>
        <div className="rules-point">
          <div className="rules-list-container">
            <i className="material-symbols-outlined">label_important</i>
            <li className="rules-list">Each correct answer scores 10 Points</li>
          </div>
          <div className="rules-list-container">
            <i className="material-symbols-outlined">label_important</i>
            <li className="rules-list">
              There are multiple correct questions each has only one correct
              options.
            </li>
          </div>
          <div className="rules-list-container">
            <i className="material-symbols-outlined">label_important</i>
            <li className="rules-list">
              To win the quiz you need to score more than 70%.
            </li>
          </div>
        </div>
        {/* <Link to={`/quiz/${quizId}`}><button className="btn btn-primary-outlined start-btn">
          Start Quiz
        </button></Link> */}
        <button className="btn btn-primary-outlined start-btn" onClick={startHandler}>
          Start Quiz
        </button>
      </div>
    </>
  );
};

export { Rules };
