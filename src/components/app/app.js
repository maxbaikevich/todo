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
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 }
      ]
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
    const newObj = {label: text, important: false, id: this.maxid++};
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newObj];
      return {
        todoData: newArray
      };
    });
  };
  onToggleImportant = (id) => {
    console.log("mportant",{id});
  }
  onToggleDone = (id) => {
    console.log("Done",{id});
  }
  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDelited={this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone  = {this.onToggleDone}/>
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
}
