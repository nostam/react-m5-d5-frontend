import React from "react";
import SingleBook from "./SingleBook";
class BookList extends React.Component {
  render() {
    return (
      <>
        {this.props.category.map((b) => (
          <SingleBook book={b} />
        ))}
      </>
    );
  }
}

export default BookList;
