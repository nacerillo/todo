import React from "react";

export const ShowContext = React.createContext();

class Show extends React.Component {
  //manage whether or not to show incompleted list items.
  constructor(props) {
    super(props);
    this.state = {
      hideCompelete: true,
      toggleMode: this.toggleMode,
      limit: 5,
      setLimit: this.setLimit,
    };
  }

  toggleMode = () => {
    console.log(this.state.hideComplete);
    this.setState({
      mode: this.state.hideCompelete === false ? true : false,
    });
  };
  setLimit = () => {
    console.log(this.state.limit);
    this.setState({
      limit: this.state.limit,
    });
  };

  render() {
    return (
      <ShowContext.Provider value={this.state}>
        {this.props.children}
      </ShowContext.Provider>
    );
  }
}

export default Show;