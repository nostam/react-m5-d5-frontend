import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import MyBadge from "./MyBadge";
// import MyModal from "./MyModal";
class SingleBook extends React.Component {
  state = {
    selectedId: null,
  };
  getComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          methood: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
            "Content-Type": "application/json",
          },
        }
      );
      let comment = await response.json();
      console.log(comment); //call commentArea here
    } catch (e) {
      console.log("error!", e);
    }
  };
  handleComment = (e) => {
    e.preventDefault();
    this.setState({ selectedId: e.currentTarget.value });
  };
  render() {
    const book = this.props.book;
    return (
      <>
        <Col xs={12} md={6} xl={4} className="my-4" key={book.asin.toString()}>
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
                  // onClick={(e) => handleComment(e)}
                  onClick={() => <CommentArea asin={book.asin} />}
                >
                  Buy @ ${book.price}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* {this.state.selectedId !== null
          ? getComment(this.state.selectedId)
          : ""} */}
      </>
    );
  }
}
export default SingleBook;
