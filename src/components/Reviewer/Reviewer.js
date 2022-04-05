import React from "react";
import "./Reviewer.css";

const Reviewer = ({ reviewer }) => {
  const { name, picture, review, ratings } = reviewer;
  return (
    <div className="reviewer-container">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Review: {review}</p>
        <h5>Ratings: {ratings} </h5>
      </div>
    </div>
  );
};

export default Reviewer;
