import React from "react";
import {
  Container,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";

import MyJumbotron from "./MyJumbotron";
import MyShelf from "./MyShelf";
import WarningSign from "./WarningSign";
// import SingleBook from "./SingleBook";
// import BookList from "./BookList";
// import CommentArea from "./CommentArea.jsx";

// import history from "../data/history.json";
// import fantasy from "../data/fantasy.json";
// import scifi from "../data/scifi.json";
// import romance from "../data/romance.json";
// import horror from "../data/horror.json";

// let products = {
//   history,
//   fantasy,
//   scifi,
//   romance,
//   horror,
// };
// let categories = Object.keys(products);

class Home extends React.Component {
  state = {
    // category: products.fantasy,
    // selectedCategory: "fantasy",
    // commentBook: null,
    // loading: true,
    // selectedBook: null,
    products: [],
  };
  // handleDropdownCategory = category => {
  //   this.setState({
  //     products: products[category].slice(0, 6),
  //     selectedCategory: category,
  //   });
  // };

  // handleSearchQuery = searchQuery => {
  //   let category = this.state.selectedCategory;

  //   if (searchQuery) {
  //     let filteredProducts = products[category].filter(book =>
  //       book.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     this.setState({ products: filteredProducts.slice(0, 12) });
  //   } else {
  //     this.setState({ products: products[category].slice(0, 12) });
  //   }
  // };

  handleProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      if (response.ok) {
        const products = await response.json();

        this.setState({ products: products });
      } else {
        console.log("hei");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.handleProducts();
  };

  render() {
    console.log(this.state.products);
    return (
      <>
        <Container>
          <MyJumbotron />
          <MyShelf products={this.state.products} />
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.selectedCategory}
            >
              {this.state.products.map(product => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`${product.id}`}
                    /*onClick={() => this.handleDropdownCategory(category)}*/
                  >
                    {/*</DropdownButton>{category}*/}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
              placeholder="Search Products by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onKeyUp={e => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.products ? (
              "?"
            ) : (
              <WarningSign text="Please select a category" variant="info" />
            )}
          </Row>
        </Container>
      </>
    );
  }
}
export default Home;
