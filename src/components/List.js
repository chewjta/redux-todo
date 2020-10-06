import React, { Component } from "react";
import { connect } from "react-redux";
import "./list.css";
import { doneTodo } from "../actions";

class List extends Component {
  render() {
    return (
      <div className="list-group">
        {this.props.todos.map((item, index) => (
          <li
            className={`list-group-item ${item.done ? "checked" : ""}`}
            key={index}
          >
            {item.name}
            <button
              onClick={() => {
                this.props.doneTodo(item.name);
              }}
              className="ml-5 btn btn-danger"
            >
              <span class="material-icons">done</span>
            </button>
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.itemActions.todos,
});

export default connect(mapStateToProps, { doneTodo })(List);
