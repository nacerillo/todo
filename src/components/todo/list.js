import React, { useEffect } from "react";

const ToDoList = (props) => {
  useEffect(() => {
    console.log("name changed to:", props);
  }, [props]);

  return (
    <ul>
      {props.list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button>X</button>
        </li>
      ))}
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
