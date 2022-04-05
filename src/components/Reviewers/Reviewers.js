import React from "react";
import Reviewer from "../Reviewer/Reviewer";
import UseReviewers from "../UseReviewers/UseReviewers";
import "./Reviewers.css";

const Reviewers = () => {
  const [reviewers, setReviewers] = UseReviewers();

  return (
    <div className="reviews-container">
      <h1 className="review-title">Customer Reviews with Details !</h1>
      <div className="reviewer-container">
        {reviewers.map((reviewer) => (
          <Reviewer key={reviewer._id} reviewer={reviewer}></Reviewer>
        ))}
      </div>
    </div>
  );
};

export default Reviewers;
