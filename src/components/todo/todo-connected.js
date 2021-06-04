import React, { useEffect, useContext } from "react";
import ToDoForm from "./form.js";
import ToDoList from "./list.js";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAjax from "../hooks/ajax";
import { ShowContext } from "../../context/showmanager.js";
import Show from "../show/show.js";
import Container from "react-bootstrap/Container";
import "./todo.scss";

const ToDo = () => {
  // const [list, setList] = useState([]);
  const context = useContext(ShowContext);

  const [_addItem, _toggleComplete, _getToDoItems, _deleteToDoItem, list] =
    useAjax();
  useEffect(_getToDoItems, [context.hideComplete]);
  //useEffect(_getToDoItems, [])
  console.log("Context.Mode: ", context.hideComplete);

  return (
    <>
      <header>
        <Nav class="p-3 mb-2 bg-primary text-white">Home</Nav>
        <h2 class="p-3 mb-2 bg-dark text-white">
          There are ({list.filter((item) => !item.complete).length}) Items To
          Complete
        </h2>
      </header>
      <section>
        <Show />
      </section>
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
