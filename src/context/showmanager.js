import React from "react";

export const ShowContext = React.createContext();

class Show extends React.Component {
  //manage whether or not to show incompleted list items.
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      toggleMode: this.toggleMode,
    };
  }

  toggleMode = () => {
    console.log(this.state.mode);
    this.setState({
      mode: this.state.mode === false ? true : false,
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
