import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div className="search-text">
      <h5>찾을 전화번호는 ?</h5>
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="이름을 입력해주세요." />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
