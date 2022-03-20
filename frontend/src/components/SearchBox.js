import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} inline className="d-flex my-2">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for products"
          className="col-lg-12"
        ></Form.Control>
        <Button type="submit" variant="warning" className="mx-2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
