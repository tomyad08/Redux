import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo1 from "./AddTodo";
import { deleteTodo, fetchTodos } from "./ProductSlice";
import UpdateTodo1 from "./UpdateTodo";

const TodoList = () => {
  const [edit, setEdit] = useState(false);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div
        className=" border border-2 rounded-2 px-5 py-5 mt-4"
        style={{ width: "23%", margin: "0 auto", backgroundColor: "grey" }}
      >
        {todos.map((todo) => (
          <div
            className="border border-2 my-2"
            style={{ margin: "0 auto", backgroundColor: "white" }}
          >
            <p key={todo.id}>
              <h4 className="text-center">{todo.title}</h4>
              <div className="d-md-flex justify-content-around">
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => setEdit(!edit)}
                >
                  Edit
                </button>
              </div>
              {edit && <UpdateTodo1 id={todo.id} />}
            </p>

            {/* <button onClick={() => handleEdit(todo.id)}>Edit</button> */}
          </div>
        ))}
        <AddTodo1 />
      </div>
    </>
  );
};

export default TodoList;
