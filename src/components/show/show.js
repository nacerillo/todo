import React from "react";

import { ShowContext } from "../../context/showmanager.js";

class ShowComponent extends React.Component {
  static contextType = ShowContext;

  render() {
    return (
      <>
        <h3>Filter Completed Tasks:</h3>
        <button onClick={this.context.toggleMode}>Hello</button>
        <select onSelect = {this.context.setLimit()}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </>
    );
  }
}
export default ShowComponent;
