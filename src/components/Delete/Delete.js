import React, { useContext } from "react";
import { Popconfirm, Button } from "antd";
import { TodoContext } from "../../App";

export const Delete = ({ record }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatchTodos] = useContext(TodoContext);

  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={() => {
        dispatchTodos({
          type: "DELETE_TODO",
          payload: record.key,
        });
      }}
    >
      <Button type="primary" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
