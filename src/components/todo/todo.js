import React, { useEffect, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./todo.scss";
const ToDo = () => {
  const [list, setList] = useState([]);
  //const [addItem, toggleComplete, getToDos, deleteToDos, list] = useAjax();
  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
    //setList([...list, savedItem]);
  };

  const updateItem = (id, val) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      item.text = val;
      let newList = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList(newList);
    }
  };

  const deleteItem = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      let newList = list.filter((listItem) => listItem._id !== id);
      setList(newList);
    }
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newlist = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      // this.setState({ list });
      setList(newlist);
    }
  };

  // componentDidMount() {
  useEffect(() => {
    let list = [
      {
        _id: 1,
        complete: false,
        text: "Clean the Kitchen",
        difficulty: 3,
        assignee: "Person A",
      },
      {
        _id: 2,
        complete: false,
        text: "Do the Laundry",
        difficulty: 2,
        assignee: "Person A",
      },
      {
        _id: 3,
        complete: false,
        text: "Walk the Dog",
        difficulty: 4,
        assignee: "Person B",
      },
      {
        _id: 4,
        complete: true,
        text: "Do Homework",
        difficulty: 3,
        assignee: "Person C",
      },
      {
        _id: 5,
        complete: false,
        text: "Take a Nap",
        difficulty: 1,
        assignee: "Person B",
      },
    ];
    setList(list);
  }, []);

  // this.setState({ list });

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
            <TodoForm addItem={addItem} />
          </Col>

          <Col>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ToDo;
