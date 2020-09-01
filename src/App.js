import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { Table, Row, Col } from "antd";
import { AddTodoForm } from "./components/Form/AddTodoForm";
import { todoReducer } from "./utils/functions/formReducer";
import { DefaultValue } from "./utils/constants/DefaultValue";
import { FormColumns } from "./utils/constants/FormsColumns";
import "antd/dist/antd.css";
import "./App.css";
import { Search } from "./components/Search/Search";

export const TodoContext = createContext();
const { Provider } = TodoContext;

const App = () => {
  const [todos, dispatchTodos] = useImmerReducer(todoReducer, DefaultValue);
  return (
    <Provider value={[todos, dispatchTodos]}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table
            dataSource={todos}
            columns={FormColumns}
            pagination={{ pageSize: 3 }}
          />
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <AddTodoForm />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={16} sm={16} md={16} lg={8} xl={8}>
          <Search />
        </Col>
      </Row>
    </Provider>
  );
};
export default App;
