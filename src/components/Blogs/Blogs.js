import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-details">
      <div className="question-ans">
        <h4>What is the purpose of context API?</h4>
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
        <p>
          A semantic tag in HTML is a tag whose name clearly describes its
          purpose and content.HTML5 introduced several new semantic
          tags.Semantic tags: form, header, table, main, aside, section, article
          etc these clearly define their content.
        </p>
        <p>
          The benefit of writing semantic HTML stems from what should be the
          driving goal of any web page: the desire to communicate. By adding
          semantic tags to your document, you provide additional information
          about that document, which aids in communication. Specifically,
          semantic tags make it clear to the browser what the meaning of a page
          and its content is. That clarity is also communicated with search
          engines, ensuring that the right pages are delivered for the right
          queries.
        </p>
      </div>
      <div className="question-ans">
        <h4>Distinguish inline, block and inline block elements?</h4>
        <p>
          The key difference between block and the inline element is that the
          block elements take up the full width available while the inline
          elements take the required width to display the contents of the
          elements.
        </p>
        <p>
          When an element is styled with display:inline, it will not start on a
          new line, will only take up as much width as the content it contains,
          and will not cause a line break after it.
        </p>
        <p>
          The difference between an inline element and an inline-block element
          is that an inline-block element can take up specified width and
          height. But, it will also not start on a new line within its parent or
          cause a line break after it.
        </p>
        <p>
          Any element styled with display: block is the polar opposite of
          display:inline. A block element starts on a new line and occupies the
          available width of its parent element or its specified width.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
