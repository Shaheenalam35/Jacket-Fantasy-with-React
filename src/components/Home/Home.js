import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1 className="home-title">Your Best Jacket, Our Commitment</h1>
        <div className="home-details">
          <p>
            I kept having chills. This was in the middle of the summer and I was
            wearing a sheepskin jacket and I was chilling. I was shaking all
            over.
          </p>
          <p>
            Everyone should have a great leather jacket in their wardrobe. It is
            perfect to wear with a T-shirt and jeans and great pair of high
            tops.{" "}
          </p>
          <button className="btn">
            <Link className="link" to="/reviews">
              See All Reviews
            </Link>
          </button>
        </div>
      </div>
      <div className="home-img">
        <img src="../../images/R.png" alt="jacket" />
      </div>
    </div>
  );
};

export default Home;
