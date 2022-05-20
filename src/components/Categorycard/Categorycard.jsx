import React from "react";
import { Link } from "react-router-dom";
import "./Categorycard.css"
const Categorycard = ({category}) => {

  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-img">
          <img src={category.img} alt="quiz-category" className="category-img"/>
        </div>
        <div className="card-heading-wrapper">
          <h2 className="card-main-heading">{category.title}</h2>
        </div>
        <div className="quiz-heading">
          <h3 className="card-sub-heading gray-text">Take this quiz to test yourself</h3>
          <h3 className="card-sub-heading gray-text">5 questions</h3>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-btn category-footer-btn">
          {/* <button className="btn btn-primary-solid playnow-btn" onClick={playnowHandler}>Play Now</button> */}
          <Link to={`/quiz/${category._id}`}><button className="btn btn-primary-solid playnow-btn">Play Now</button></Link>
          
        </div>
      </footer>
    </div>
  );
};

export { Categorycard };
