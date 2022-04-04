import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-details">
      <div className="question-ans">
        <h4>What is the purpose of context APi?</h4>
        <p>
          The React Context API is a component structure, which allows us to
          share data across all levels of the application. The main aim of
          Context API is to solve the problem of prop drilling (also called
          "Threading")
        </p>
        <p>
          Context is used to share data which can be considered "global" for
          React components tree and use that data where needed, such as the
          current authenticated user, theme, etc
        </p>
      </div>
      <div className="question-ans">
        <h4>What is Semantic Tag ?</h4>
        <p></p>
      </div>
      <div className="question-ans">
        <h4>Distinguish inline, block and inline block elements</h4>
        <p></p>
      </div>
    </div>
  );
};

export default Blogs;
