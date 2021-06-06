import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import PaginationList from "react-pagination-list";
import Form from "react-bootstrap/Form";
//import { ShowContext } from "../../context/showmanager.js";
import { ShowContext } from "../../context/statemanager.js";

const ToDoList = (props) => {
  const context = useContext(ShowContext);
  let displayedList = props.list;
  // console.log(props);
  //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
  useEffect(() => {
    console.log("name changed to:", props);
  }, [props]);

  useEffect(() => {
    //console.log("LIST DISPLAYED", displayedList);
    switch (context.sortBy) {
      case "Hardest":
        displayedList = displayedList.sort((x, y) =>
          x.difficulty < y.difficulty ? 1 : -1
        );
        break;
      case "Easiest":
        displayedList = displayedList.sort((x, y) =>
          x.difficulty > y.difficulty ? 1 : -1
        );
        break;
      default:
        displayedList = props.list;
    }
  }, [context.sortBy]);

  return (
    <>
      <h3>Filters</h3>
      <Button onClick={context.toggleMode}>Hide Complete?</Button>
      <Form.Group>
        <Form.Label className="mt-2 mb-0">Sort By</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => context.setSort(e.target.value)}
        >
          <option value="Easiest">Easiest</option>
          <option value="Hardest">Hardest</option>
        </Form.Control>
      </Form.Group>
      <section>
        <PaginationList
          data={displayedList}
          pageSize={context.itemsPerPage}
          renderItem={(item) => (
            <Toast
              className="hello"
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
