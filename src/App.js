import React from "react";
import ShowContext from "./context/showmanager";
import ToDo from "./components/todo/todo-connected.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <ShowContext>
          <ToDo />
        </ShowContext>
      </>
    );
  }
}
