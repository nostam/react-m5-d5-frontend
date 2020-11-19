import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import MyBadge from "./MyBadge";

class SingleBook extends React.Component {
  render() {
    const book = this.props.book;
    // const selectedBook = (asin) => {
    //   console.log(asin);
    //   this.setState({ test: asin });
    // };
    return (
      <>
        <Col xs={12} md={6} xl={4} className="my-4" key={book.asin}>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src={book.img}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="text-truncate">{book.title}</Card.Title>
              <Row className="d-flex justify-content-between px-2">
                <MyBadge text={book.category} color="secondary" />
                <Button
                  value={book.asin}
                  variant="primary"
                  onClick={this.props.onClick}
                >
                  Buy @ ${book.price}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
