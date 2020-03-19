import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  render() {
    const { onAddItem } = this.props
    return (
        <div className="add-item">
      <button className="btn btn-outline-secondary"
       type="button"
       onClick = {()=> onAddItem('hello World') }
       >
        add item
      </button>
      </div>
    );
  }
}
