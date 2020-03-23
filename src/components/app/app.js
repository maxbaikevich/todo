import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";
import "./app.css";

export default class App extends Component {
  maxid = 100;
  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoItem("drink coffee"),
        this.createTodoItem("Make Awesome App"),
        this.createTodoItem("Have a lunch")
      ]
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxid++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
    });
  };
  onAddItem = text => {
    const newObj = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newObj];
      return {
        todoData: newArray
      };
    });
  };
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const nawItem = { ...oldItem, important: !oldItem.important };
      const newArray = [
        ...todoData.slice(0, idx),
        nawItem,
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const nawItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        nawItem,
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      };
    });
    console.log("Done", { id });
  };
  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el)=> el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDelited={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
}
