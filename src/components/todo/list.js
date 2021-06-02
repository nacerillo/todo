import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
const ToDoList = (props) => {
  useEffect(() => {
    console.log("name changed to:", props);
  }, [props]);

  return (
    <ul>
      <ListGroup>
        <>
          {props.list.map((item) => (
            <ListGroup.Item
              variant={item.complete ? "danger" : "success"}
              className={`complete-${item.complete.toString()} py-3`}
              key={item._id}
              onClick={() => props.handleComplete(item._id)}
            >
              {item.complete ? `${item.text} X` : item.text}
            </ListGroup.Item>
          ))}
        </>
      </ListGroup>
    </ul>
  );
};
export default ToDoList;

/*import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <span onClick={() => this.props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
export default ToDoList;*/
