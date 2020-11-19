import React from "react";
import SingleBook from "./SingleBook";
function BookList(props) {
  return (
    <>
      {props.category.map((b) => (
        <SingleBook book={b} />
      ))}
    </>
  );
}

export default BookList;
