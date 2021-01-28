import React, { Component } from "react";
import OneCard from "./userCard";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: this.props.data_sort
    };
  }
  render() {
    //console.log("content", this.props);
    return (
      <div className="container block_hidden" id="block_hidden">
        <div className="row" id="block_group">
          <OneCard d={this.props.data_sort} />
        </div>
      </div>
    );
  }
}

export default Content;
