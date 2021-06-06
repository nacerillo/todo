import React, { useEffect, useContext } from "react";
import ToDoForm from "./form.js";
import ToDoList from "./list.js";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import useAjax2 from "../hooks/ajax2";
import useAjax from "../hooks/ajax";
import { ShowContext } from "../../context/statemanager.js";
//import Show from "../show/show.js";
import Container from "react-bootstrap/Container";
import "./todo.scss";
const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";
const ToDo = () => {
  // const [list, setList] = useState([]);
  const context = useContext(ShowContext);
  const [_addItem, _toggleComplete, _getToDoItems, _deleteToDoItem, list] =
    useAjax();
  //const [setOptions] = useAjax2();

  /*useEffect(
    () =>
      setOptions({
        url: todoAPI,
        method: "get",
        mode: "cors",
        cache: "no-cache",
      }),
    []);*/
  // useEffect()
  useEffect(_getToDoItems, [context.hideComplete]);
  return (
    <>
      <header>
        <Nav class="p-3 mb-2 bg-primary text-white">Home</Nav>
        <h2 class="p-3 mb-2 bg-dark text-white">
          There are ({list.filter((item) => !item.complete).length}) Items To
          Complete
        </h2>
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
