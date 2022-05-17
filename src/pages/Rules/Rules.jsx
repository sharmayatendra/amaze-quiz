import { Nav } from "../../components/Nav/Nav";
import "./Rules.css";
const Rules = () => {
  return (
    <>
      <Nav />
      <div className="rulespage-container">
        <h1>Rules</h1>
        <div className="rules-point">
          <div className="rules-list-container">
            <i class="material-symbols-outlined">label_important</i>
            <li className="rules-list">Each correct answer scores 10 Points</li>
          </div>
          <div className="rules-list-container">
            <i class="material-symbols-outlined">label_important</i>
            <li className="rules-list">
              There are multiple correct questions each has only one correct
              options.
            </li>
          </div>
          <div className="rules-list-container">
            <i class="material-symbols-outlined">label_important</i>
            <li className="rules-list">
              To win the quiz you need to score more than 70%.
            </li>
          </div>
        </div>
        <button className="btn btn-primary-outlined start-btn">
          Start Quiz
        </button>
      </div>
    </>
  );
};

export { Rules };
