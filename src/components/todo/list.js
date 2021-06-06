import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import PaginationList from "react-pagination-list";
//import { ShowContext } from "../../context/showmanager.js";
import { ShowContext } from "../../context/showmanager.js";

const ToDoList = (props) => {
  const context = useContext(ShowContext);
  // console.log(props);
  useEffect(() => {
    console.log("name changed to:", props);
  }, [props]);
  useEffect(() => {});

  return (
    <>
      <h3>Filter Completed Tasks:</h3>
      <button onClick={context.toggleMode}>Hello</button>
      <section>
        <PaginationList
          data={props.list}
          pageSize={context.itemsPerPage}
          renderItem={(item) => (
            <Toast
              max-height="100px"
              className={`complete-${item.complete.toString()} py-3`}
              key={item._id}
              onClose={() => props.deleteItem(item._id)}
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
          )}
        />
      </section>
    </>
  );
};
export default ToDoList;
