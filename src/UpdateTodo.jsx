import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "./ProductSlice";

const UpdateTodo1 = ({ id }) => {
  const todo = useSelector((state) =>
    state.todos.todos.find((t) => t.id === id)
  );
  const [text, setText] = useState(todo ? todo.text : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, text }));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-secondary mt-2 mx-5">
        Update Todo
      </button>
    </form>
  );
};

export default UpdateTodo1;
