import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label:''
    })
  };
  render() {
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="what needs to be done"
          value={this.state.value}
        />
        <button className="btn btn-outline-secondary" type="button"
        onClick = {this.onSubmit}>
          add
        </button>
      </form>
    );
  }
}
