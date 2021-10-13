import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { img, name, expertize } = expert;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{expertize}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
