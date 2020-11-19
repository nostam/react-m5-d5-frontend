import React from "react";
import AllBooks from "./AllBooks";
import { Row, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";
class shelf extends React.PureComponent {
  state = { selectedId: null };
  render() {
    console.log(this.state.selectedId);
    let booksArr = [];
    const selectedBooks = [];
    booksArr = AllBooks.flat();
    for (let i = 0; i < 3; i++) {
      selectedBooks.push(
        booksArr[Math.floor(Math.random() * booksArr.length - 1)]
      );
    }
    return (
      <Container fluid>
        <h4>3 Random Picks </h4>
        <Row className="justify-content-between no-gutters">
          {selectedBooks.map((b, index) => (
            <SingleBook
              book={b}
              value={b.asin}
              onClick={() => this.setState({ selectedId: b.asin })}
              key={`random-books-${index}`}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default shelf;
