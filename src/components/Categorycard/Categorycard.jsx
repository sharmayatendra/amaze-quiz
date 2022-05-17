import React from "react";
import { Link } from "react-router-dom";
import "./Categorycard.css"
const Categorycard = ({category}) => {
  return (
    <div class="card">
      <div class="card-wrapper">
        <div class="card-img">
          <img src={category.img} alt="river-scene" className="category-img"/>
        </div>
        <div class="card-heading-wrapper">
          <h2 class="card-main-heading">{category.categoryName}</h2>
          <h3 class="card-sub-heading gray-text">{category.description}</h3>
        </div>
        <div className="quiz-heading">
          <h3 class="card-sub-heading gray-text">Take this quiz to test yourself</h3>
          <h3 class="card-sub-heading gray-text">5 questions</h3>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-btn category-footer-btn">
          <Link to="/rules"><button class="btn btn-primary-solid playnow-btn">Play Now</button></Link>
          
        </div>
      </footer>
    </div>
  );
};

export { Categorycard };
