import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const ToDoForm = (props) => {
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    /*this.setState({
      let item = { ...item, [e.target.name]: e.target.value },
    });*/
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newitem = {};
    setItem(newitem);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Add Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>To Do Item</Form.Label>
              <Form.Control
                name="text"
                placeholder="Add To Do"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="difficulty"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Assigned To</Form.Label>
              <Form.Control
                type="text"
                name="assignee"
                placeholder="Assigned To"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ToDoForm;

/*
   <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </label>
        <button>Add Item</button>
      </form>
*/
//import React from "react";

/*class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }
  handleInputChange = (e) => {
    this.setState({
      item: { ...this.state.item, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.handleSubmit(this.state.item);
    const item = {};
    this.setState({ item });
  };

  render() {
    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input
              defaultValue="1"
              type="range"
              min="1"
              max="5"
              name="difficulty"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Assigned To</span>
            <input
              type="text"
              name="assignee"
              placeholder="Assigned To"
              onChange={this.handleInputChange}
            />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
  }
}

export default ToDoForm;*/
