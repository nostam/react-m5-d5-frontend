import React from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
class BookList extends React.Component {
  state = {
    selectedId: null,
  };
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.category.map((b) => (
          <SingleBook
            isSelected={false}
            book={b}
            onClick={() => this.setState({ selectedId: b.asin })}
            key={b.asin}
          />
        ))}
        {/* <CommentArea asin={this.state.selectedId} /> */}
      </>
    );
  }
}

export default BookList;
