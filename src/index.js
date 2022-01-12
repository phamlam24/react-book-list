import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Setup Variables
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61gS6EWmWwL.jpg",
    title: "Will",
    author: "Will Smith",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51b6fvQr1-L.jpg",
    title: "Project Hail Mary",
    author: "Andy Weir",
  },
];


// Main Component
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {img,title,author} = book;
        return (
          <Book key={book.id} {...book}></Book> // ...book là spread operator
        )
      })}
    </section>
  );
}

// Components
function Book({img, title, author}) {
  // const {img, title, author} = props;
  const clickHandler = () => {
    alert('hello');
  }
  return (
    <article className="book">
      <img src={img} alt="book placeholder"></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference Function</button>
      <button type="button" onClick={() => {alert(title)}}>Inline Function</button>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
