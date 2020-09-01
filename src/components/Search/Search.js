import React, { useState, useContext } from "react";
import { Button, Form, Row, Typography } from "antd";
import { FormInput } from "../Form/FormInput";
import { TodoContext } from "../../App";

const { Title } = Typography;

export const Search = () => {
  const [searchText, setSearchText] = useState();
  // eslint-disable-next-line no-unused-vars
  const [_, dispatchTodos] = useContext(TodoContext);

  const searchSubmit = () => {
    dispatchTodos({ type: "SEARCH_TODO", payload: [searchText] });
  };

  return (
    <>
      <Form onFinish={searchSubmit}>
        <Title level={5}>Search TODO Item</Title>
        <Row type="flex" justify="center">
          <FormInput setForm={setSearchText} />
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!searchText}>
            Search
          </Button>
        </Row>
      </Form>
    </>
  );
};
