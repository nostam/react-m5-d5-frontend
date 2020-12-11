import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import MyBadge from "./MyBadge";

export default class SingleProduct extends Component {
  render() {
    const {
      name,
      description,
      brand,
      imageUrl,
      price,
      category,
    } = this.props.products;
    return (
      <div>
        <Col xs={12} md={6} xl={4} className="my-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src={imageUrl}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="text-truncate">{name}</Card.Title>
              <Row className="d-flex justify-content-between px-2">
                <MyBadge color="secondary" />
                <Button variant="primary" onClick={this.props.onClick}>
                  Buy @ ${price}
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
