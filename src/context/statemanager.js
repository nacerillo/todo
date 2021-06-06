import React from "react";

export const ShowContext = React.createContext();

class StateManager extends React.Component {
  //manage whether or not to show incompleted list items.
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 4,
      hideComplete: false,
      toggleMode: this.toggleMode,
      sortBy: "Easiest",
      setSort: this.setSort,
      // limit: 5,
      // setLimit: this.setLimit,
    };
  }

  toggleMode = () => {
    console.log(this.state.hideComplete);
    this.setState({
      hideComplete: this.state.hideComplete === false ? true : false,
    });
  };
  setSort = (value) => {
    // console.log("VALUE OF e.target.value", value);
    this.setState({ sortBy: value });
    //console.log(this.state.sortBy);
    // console.log("Sort Has Changed: ", this.state.sortBy);
  };
  /* setLimit = () => {
    console.log(this.state.limit);
    this.setState({
      limit: this.state.limit,
    });
  };*/

  render() {
    return (
      <ShowContext.Provider value={this.state}>
        {this.props.children}
      </ShowContext.Provider>
    );
  }
}

export default StateManager;
