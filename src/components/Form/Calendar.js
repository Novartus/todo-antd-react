import React from "react";
import { Col, DatePicker, Form } from "antd";
import moment from "moment";

export const Calendar = ({ setDate }) => (
  <Col>
    <Form.Item
      className="CalendarLabel"
      label="Choose a date"
      name="Select a date"
    >
      <DatePicker
        defaultValue={moment()}
        disabledDate={(current) => {
          return current && current <= moment();
        }}
        onChange={(_, dateString) => setDate(dateString)}
      />
    </Form.Item>
  </Col>
);
