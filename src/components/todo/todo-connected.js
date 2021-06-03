import React, { useEffect, useState } from "react";
import ToDoForm from "./form.js";
import ToDoList from "./list.js";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAjax from "../hooks/ajax";

import Container from "react-bootstrap/Container";
import "./todo.scss";

const ToDo = () => {
  // const [list, setList] = useState([]);

  const [_addItem, _toggleComplete, _getToDoItems, _deleteToDoItem, list] =
    useAjax();
  useEffect(_getToDoItems, []);
  // console.log(list);

  return (
    <>
      <header>
        <Nav class="p-3 mb-2 bg-primary text-white">Home</Nav>
        <h2 class="p-3 mb-2 bg-dark text-white">hello</h2>
      </header>

      <Container className="todo">
        <Row>
          <Col>
            <ToDoForm addItem={_addItem} />
          </Col>
          <Col>
            <ToDoList
              list={list}
              handleComplete={_toggleComplete}
              deleteItem={_deleteToDoItem}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ToDo;
