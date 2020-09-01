import React from "react";
import { Complete } from "../../components/Complete/Complete";
import { Delete } from "../../components/Delete/Delete";
import { Title } from "../../components/Title/Title";

export const FormColumns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },

  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (_, record) => {
      return (
        <>
          <Complete record={record} />
          <Delete record={record} />
        </>
      );
    },
  },
];
