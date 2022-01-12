import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// book lists
import {books} from './booklist'
// Components
import SpecificBook from './Book'

import {greeting} from './testing/testing'

// Main Component
function BookList() {
  console.log(greeting)
  return (
    <section className="booklist">
      {books.map((book) => {
        // const {img,title,author} = book;
        return (
          <SpecificBook key={book.id} {...book}></SpecificBook> // ...book is a spread operator
        )
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
