import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">With textarea</span>
        </div>
        <textarea className="form-control" aria-label="With textarea" />
      </div>
    );
  }
}

export default SearchBar;
