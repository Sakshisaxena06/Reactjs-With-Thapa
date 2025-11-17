import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ keyys, checked, data, onHandleDeleteTodo , onhandleCheckedTodo }) => {
  return (
    <li  className="todo-item">
      <span className={checked ? "checkList" : "nonCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onhandleCheckedTodo(data)}>
        <MdCheck /></button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
