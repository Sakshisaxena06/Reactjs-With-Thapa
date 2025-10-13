import React from "react";
 const TodosKey = "reactTodo"
export const getLocalStorageTodoData = () => {
        const rawTodos = localStorage.getItem(TodosKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
}
export const setLocalStorageTodoData = (task) => {
  return  localStorage.setItem(TodosKey, JSON.stringify(task));
}