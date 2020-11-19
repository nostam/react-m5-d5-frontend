import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import MyBadge from "./MyBadge";
function SingleBook(props) {
  console.log(props);
  const book = props.book;
  return (
    <>
      <Col xs={12} md={6} xl={4} className="my-4" key={book.asin.toString()}>
        <Card key={props.index} style={{ width: "16rem" }}>
          <Card.Img
            variant="top"
            src={book.img}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{book.title}</Card.Title>
            <Row className="d-flex justify-content-between px-2">
              <MyBadge text={book.category} color="secondary" />
              <Button variant="primary">Buy @ ${book.price}</Button>
            </Row>
          </Card.Body>
          {/* <Card.Footer className="text-right">ASIN: {book.asin}</Card.Footer> */}
        </Card>
      </Col>
    </>
  );
}
export default SingleBook;
