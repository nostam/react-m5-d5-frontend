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
import "./App.css";

import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyShelf from "./components/MyShelf";
import WarningSign from "./components/WarningSign";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

import history from "./data/history.json";
import fantasy from "./data/fantasy.json";
import scifi from "./data/scifi.json";
import romance from "./data/romance.json";
import horror from "./data/horror.json";
// import SelectBooks from "./components/SelectBooks";
let books = {
  history,
  fantasy,
  scifi,
  romance,
  horror,
};
let categories = Object.keys(books);
class App extends React.Component {
  state = {
    category: books.fantasy,
    selectedCategory: "fantasy",
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
        {console.log(books)}
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

export default App;
