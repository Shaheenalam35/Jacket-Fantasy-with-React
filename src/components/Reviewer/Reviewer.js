import React from "react";
import "./Reviewer.css";

const Reviewer = ({ reviewer }) => {
  const { name, picture, review, ratings } = reviewer;
  return (
    <div className="reviewer-card">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          <strong>Review:</strong> {review}
        </p>
        <h5>Ratings: {ratings} </h5>
      </div>
    </div>
  );
};

export default Reviewer;
