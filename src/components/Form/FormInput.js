import React from "react";
import { Col, Form, Input } from "antd";

export const FormInput = ({ setForm }) => (
  <Col xs={24} sm={24} md={24} lg={10} xl={10}>
    <Form.Item label="Title" name="title">
      <Input
        onChange={(e) => {
          setForm(e.target.value);
        }}
      />
    </Form.Item>
  </Col>
);
