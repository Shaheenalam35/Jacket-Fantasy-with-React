import React, { useEffect, useState } from "react";

const UseReviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  useEffect(() => {
    fetch("reviewer.json")
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);
  return [reviewers, setReviewers];
};

export default UseReviewers;
