import React, { Component } from "react";
export default class EmptyCard extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Empty-Card">
        <h1>{content}</h1>
      </div>
    );
  }
}