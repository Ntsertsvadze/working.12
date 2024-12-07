import React, { Component } from "react";
import EmptyCard from "./EmptyCard";
import TodoList from "./TodoList";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
class TodoContent extends Component {
  state = {
    isOpenModal: false,
    newTask: "",
    todoList: [
      { title: "DOG", id: uuidv4()},
      { title: "LION", id: uuidv4()},
      { title: "TIGER", id: uuidv4()},
    ],
    doneList: [],
  };
  openModal = () => {
    this.setState({ isOpenModal: true });
  };
  closeModal = () => {
    this.setState({ isOpenModal: false });
  };
  onChange = (e) => {
    this.setState({ newTask: e.target.value });
  };
  createTask = (e) => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { title: this.state.newTask, id: uuidv4() },
      ],
      newTask: "",
      isOpenModal: false,
    });
  };
  moveToDoneList = (id) => {
    const findTask = this.state.todoList?.find((item) => item.id === id);
    this.setState({
      doneList: [...this.state.doneList, findTask],
      todoList: this.state.todoList?.filter((item) => item.id !== id),
    });
  };
  moveToTodoList = (id) => {
    const findTask = this.state.doneList?.find((item) => item.id === id);
    this.setState({
      todoList: [...this.state.todoList, findTask],
      doneList: this.state.doneList?.filter((item) => item.id !== id),
    });
  };
  delateTask = (id) => {
    this.setState({
      doneList: this.state.doneList?.filter((item) => item.id !== id),
    });
  };
  render() {
    return (
      <>
        <button className="Create-task" onClick={this.openModal}>
          Create Task
        </button>
        <div className="List">
          <div>
            <h1 className="Title">To Do List</h1>
            <div className="ToDoList">
              {this.state.todoList?.length > 0 ? (
                this.state.todoList?.map((list, index) => (
                  <TodoList
                    id={list.id}
                    key={list.id}
                    index={index}
                    title={list.title}
                    isDoneList={false}
                    moveToDoneList={this.moveToDoneList}
                  />
                ))
              ) : (
                <EmptyCard content="Todo List is Empty" />
              )}
            </div>
          </div>
          <div>
            <h1 className="Title">Done List</h1>
            <div className="DoneList">
              {this.state.doneList?.length > 0 ? (
                this.state.doneList?.map((item, index) => (
                  <TodoList
                    id={item.id}
                    key={item.id}
                    index={index}
                    title={item.title}
                    isDoneList={true}
                    moveToTodoList={this.moveToTodoList}
                    delateTask={this.delateTask}
                  />
                ))
              ) : (
                <EmptyCard content="Done List is Empty" />
              )}
            </div>
          </div>
        </div>
        {this.state.isOpenModal && (
          <Modal
            onChange={this.onChange}
            onSubmit={this.createTask}
            value={this.state.newTask}
            clsoeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
export default TodoContent;