import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h2 className="text">Page you are looking , is not available !!</h2>

      <button className="btn">
        <Link className="link" to="/">
          Back to Homepage
        </Link>
      </button>
      <div className="img">
        <img
          src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
