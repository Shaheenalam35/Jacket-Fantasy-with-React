import React from "react";
import { Link } from "react-router-dom";
import Reviewer from "../Reviewer/Reviewer";
import UseReviewers from "../UseReviewers/UseReviewers";
import "./Home.css";

const Home = () => {
  const [reviewers, setReviewers] = UseReviewers();
  return (
    <div>
      <div className="home-container">
        <div>
          <h1 className="home-title">Your Best Jacket, Our Commitment</h1>
          <div className="home-details">
            <p>
              You kept having chills. This was in the middle of the summer and
              You was wearing a sheepskin jacket and You was chilling. I was
              shaking all over.
            </p>
            <p>
              Everyone should have a great leather jacket in their wardrobe. It
              is perfect to wear with a T-shirt and jeans and great pair of high
              tops.
            </p>
            <button className="btn-live-demo">
              <Link className="link" to="#">
                Live Demo
              </Link>
            </button>
          </div>
        </div>
        <div className="home-img">
          <img src="https://i.pinimg.com/736x/c4/59/1e/c4591e399a7d6b5c30ec7c877f81984e.jpg" />
        </div>
      </div>
      <div className="reviews-container">
        <h1 className="review-title">Customer Reviews</h1>
        <div className="reviewer-container">
          {reviewers.slice(0, 3).map((reviewer) => (
            <Reviewer key={reviewer._id} reviewer={reviewer}></Reviewer>
          ))}
        </div>
        <div>
          <button className="btn">
            <Link className="link" to="/reviews">
              See All Reviews
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
