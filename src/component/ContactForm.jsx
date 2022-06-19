import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

import { useDispatch } from "react-redux";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const dispatch = useDispatch();
  // const getName = (e) => {
  //   let keyword = e.target.value;
  //   setName(keyword);
  // };
  const addContact = (e) => {
    e.preventDefault();
    // name , phoneNumber을 store로 보내기 위해서는 action을 해줘야 한다 aciont은? dispathch가 해준다.
    // payload : 넘겨주고 싶은 값을 보낸다.
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
          />
          {/* onChange ? 타입할때 마다 타입한 값을 읽어와서 저장한다. */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create!
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
