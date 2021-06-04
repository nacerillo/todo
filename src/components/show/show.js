import React from "react";

import { ShowContext } from "../../context/showmanager.js";

class ShowComponent extends React.Component {
  static contextType = ShowContext;

  render() {
    return (
      <>
        <h3>Filter Completed Tasks:</h3>
        <button onClick={this.context.toggleMode}>Hello</button>
      </>
    );
  }
}
export default ShowComponent;
