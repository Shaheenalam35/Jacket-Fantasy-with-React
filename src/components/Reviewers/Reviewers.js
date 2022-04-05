import React from "react";
import Reviewer from "../Reviewer/Reviewer";
import UseReviewers from "../UseReviewers/UseReviewers";
import "./Reviewers.css";

const Reviewers = () => {
  const [reviewers, setReviewers] = UseReviewers();
  console.log(reviewers);
  return (
    <div className="reviews-container">
      <h1>Customer Reviews with Details !</h1>
      <div className="reviewer-container">
        {reviewers.map((reviewer) => (
          <Reviewer key={reviewer._id} reviewer={reviewer}></Reviewer>
        ))}
      </div>
    </div>
  );
};

export default Reviewers;
