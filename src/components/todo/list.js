import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
const ToDoList = (props) => {
  useEffect(() => {
    console.log("name changed to:", props);
  }, [props]);

  return (
    <>
      <ListGroup>
        {props.list.map((item) => (
          <ListGroup.Item>
            <Toast
              className={`complete-${item.complete.toString()} py-3`}
              key={item._id}
              onClose={() => console.log("hello")}
            >
              <Toast.Header>
                <strong>{item.assignee}</strong>
                <Badge variant="secondary">
                  {item.complete ? "completed" : "pending"}
                </Badge>
              </Toast.Header>
              <Toast.Body onClick={() => props.handleComplete(item._id)}>
                {item.text}
                <div>Difficulty: {item.difficulty}</div>
              </Toast.Body>
            </Toast>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
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

<ListGroup.Item
                variant={item.complete ? "danger" : "success"}
                className={`complete-${item.complete.toString()} py-3`}
                key={item._id}
                onClick={() => props.handleComplete(item._id)}
              >
                {item.complete ? `${item.text} X` : item.text}
              </ListGroup.Item>
///original
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
<Toast onClose={() => props.remove(item._id)}>
<Toast.Header>
{item.assignee}
</Toast.Header>
<Toast.Body>
{item.complete ? `${item.text} X` : item.text}
</Toast.Body>
<Toast.Footer>
Footer
</Toast.Footer>
</Toast>





export default ToDoList;*/
