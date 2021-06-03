import React, { useEffect, useState } from "react";
import ToDoForm from "./form.js";
import ToDoList from "./list.js";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./todo.scss";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDo = () => {
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    console.log(item);
    item.due = new Date();
    fetch(todoAPI, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const _toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: "get",
      mode: "cors",
    })
      .then((data) => data.json())
      .then((data) => setList(data.results))
      .catch(console.error);
  };
  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <Nav class="p-3 mb-2 bg-primary text-white">Home</Nav>
        <h2 class="p-3 mb-2 bg-dark text-white">
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header>

      <Container className="todo">
        <Row>
          <Col>
            <ToDoForm addItem={_addItem} />
          </Col>
          <Col>
            <ToDoList list={list} handleComplete={_toggleComplete} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ToDo;
