import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import useLocalStorage from "../hooks/useLocalStorage";

function Input(props) {
  const [listItem, setListItem] = useLocalStorage("list", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(listItem);
    setListItem("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="please enter something..."
          onChange={(e) => setListItem(e.target.value)}
          value={listItem}
        />
        <input type="submit" value="Submit!" />
      </form>
    </div>
  );
}

export default connect(null, { addTodo })(Input);
