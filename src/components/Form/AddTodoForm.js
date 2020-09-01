import React, { useState, useContext } from "react";
import { Button, Form, Row, Typography } from "antd";
import { openInfoNotification } from "../../utils/functions/openNotification";
import { FormInput } from "./FormInput";
import { Calendar } from "./Calendar";
import { TodoContext } from "../../App";

const { Title } = Typography;

export const AddTodoForm = () => {
  const [form, setForm] = useState();
  const [date, setDate] = useState();
  // eslint-disable-next-line no-unused-vars
  const [_, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (form && date && form.length >= 5) {
      dispatchTodos({ type: "ADD_TODO", payload: [form, date] });
    } else {
      openInfoNotification(
        "bottomLeft",
        "Title Length Must Be At least 5 Letters"
      );
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title level={4}>Add TODO Item</Title>
        <Row type="flex" justify="center">
          <FormInput setForm={setForm} />
          {form && form.length >= 5 && <Calendar setDate={setDate} />}
          {form && form.length < 5 && (
            <Title className="TitleLength" type="danger" level={4}>
              Title Length Must Be At least 5 Letters
            </Title>
          )}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Add
          </Button>
        </Row>
      </Form>
    </>
  );
};
