import React from "react";
import {
  Container,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
import MyJumbotron from "./MyJumbotron";
import MyShelf from "./MyShelf";
import WarningSign from "./WarningSign";
// import SingleBook from "./SingleBook";
import BookList from "./BookList";
// import CommentArea from "./CommentArea.jsx";

import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
let books = {
  history,
  fantasy,
  scifi,
  romance,
  horror,
};
let categories = Object.keys(books);

class Home extends React.Component {
  state = {
    category: books.fantasy,
    selectedCategory: "fantasy",
    commentBook: null,
    loading: true,
    selectedBook: null,
  };
  handleDropdownCategory = (category) => {
    this.setState({
      books: books[category].slice(0, 6),
      selectedCategory: category,
    });
  };

  handleSearchQuery = (searchQuery) => {
    let category = this.state.selectedCategory;

    if (searchQuery) {
      let filteredBooks = books[category].filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };
  render() {
    return (
      <>
        <MyNavBar title="M4 Book store!" />
        <Container>
          <MyJumbotron />
          <MyShelf />
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.selectedCategory}
            >
              {categories.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownCategory(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onKeyUp={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.books ? (
              <BookList category={this.state.books} />
            ) : (
              <WarningSign text="Please select a category" variant="info" />
            )}
          </Row>
          <MyFooter />
        </Container>
      </>
    );
  }
}
export default Home;
