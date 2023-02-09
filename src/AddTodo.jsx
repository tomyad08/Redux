import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "./ProductSlice";

const AddTodo1 = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodo(text));
    setText("");
  };

  return (
    <div>
      <h4 style={{ color: "white" }}> Add Data</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="d-flex justify-content-around">
          <button
            type="submit"
            className="btn btn-success p-2 mt-1"
            style={{ borderColor: "white" }}
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo1;
