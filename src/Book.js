import React from "react";

// Component
function Book({ img, title, author }) {
  // const {img, title, author} = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book placeholder"></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Function
      </button>
      <button
        type="button"
        onClick={() => {
          alert(title);
        }}
      >
        Inline Function
      </button>
      <button
        type="button"
        onClick={() => {
          complexExample(author);
        }}
      >
        More Complex Example
      </button>
    </article>
  );
}

export default Book;
