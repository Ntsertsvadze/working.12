import React, { Component } from "react";
export default class Modal extends Component {
  render() {
    const { clsoeModal, onChange, value, onSubmit } = this.props;
    return (
      <>
        <form onSubmit={onSubmit} className="Form-modal">
          <span className="Close-btn" onClick={clsoeModal}>
            X
          </span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter New Task"
          />
 <button type="submit">Submit</button>
        </form>
        <div className="Overlay" onClick={clsoeModal}></div>
      </>
    );
  }
}         

