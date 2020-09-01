import React, { useContext } from "react";
import { Button } from "antd";
import { TodoContext } from "../../App";

export const Complete = ({ record }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatchTodos] = useContext(TodoContext);
  return (
    <a
      href="#complete"
      onClick={() => {
        dispatchTodos({
          type: "COMPLETE_TODO",
          payload: record.key,
        });
      }}
    >
      <Button type="primary">Complete</Button>
    </a>
  );
};
