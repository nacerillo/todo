import React from "react";
import StateManager from "./context/statemanager";
import ToDo from "./components/todo/todo-connected.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StateManager>
          <ToDo />
        </StateManager>
      </>
    );
  }
}
