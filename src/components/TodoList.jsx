import React, { Component } from "react";
export default class TodoList extends Component {
  render() {
    const {
      id,
      title,
      index,
      delateTask,
      isDoneList,
      moveToTodoList,
      moveToDoneList,
    } = this.props;
    return (
      <div className="List-content">
        <div className="Content">
          <h2>{index + 1}</h2>
          <h1>{title}</h1>
        </div>
        {isDoneList ? (
          <div className="Buttons">
            <button onClick={() => delateTask(id)}>Delete Task</button>
            <button onClick={() => moveToTodoList(id)}>
              Mote To Done List
            </button>
          </div>
        ) : (
          <button onClick={() => moveToDoneList(id)}>Done</button>
        )}
      </div>
    );
  }
}