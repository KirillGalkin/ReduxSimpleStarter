import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return <input value={this.state.term} onChange={this.onInputChange} />;
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
    // console.log(e.target.value);
  };
}

export default SearchBar;