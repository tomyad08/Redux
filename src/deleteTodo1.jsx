import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./ProductSlice";

const DeleteTodo1 = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };

  return <button onClick={handleClick}>Delete Todo</button>;
};

export default DeleteTodo1;
