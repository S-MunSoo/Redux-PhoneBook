import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [nameKey, setNameKey] = useState("");
  const dispatch = useDispatch();
  const searchName = (e) => {
    e.preventDefault();

    dispatch({
      type: "NAMEKEY",
      payload: { nameKey },
    });
  };
  return (
    <div className="search-text">
      <h5>찾을 전화번호는 ?</h5>

      <Form onSubmit={searchName}>
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={(e) => setNameKey(e.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
