import React from "react";
import "./Homepage.css";
import { Nav } from "../../components/Nav/Nav";

const Homepage = () => {
  return (
    <>
      <Nav />
      <div className="homepage-container">
        <div class="img-container">
          <img
            src="https://thumbs.dreamstime.com/b/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg"
            alt="quiz-img"
            className="img-res"
          />
        </div>

        <div className="homepage-heading-container">
          <h1>Do you wanna test your knowledge?</h1>
          <h1>Try out the quizzes</h1>
          {/* <Link to="/categories">
              </Link> */}
          <button class="btn btn-primary-solid">Explore Quiz</button>
        </div>
      </div>
    </>
  );
};

export { Homepage };
