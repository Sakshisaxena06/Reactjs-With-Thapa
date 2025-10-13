import React from "react";
const TodosKey = "reactTodo";

// get todos from localStorage
export const getLocalStorageTodoData = () => {
  const saved = localStorage.getItem(TodosKey);
  if (saved) {
    return JSON.parse(saved);   // change JSON string back to array
  } else {
    return [];   // if nothing saved, return empty array
  }
};

// save todos to localStorage
export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(TodosKey, JSON.stringify(task)); // save array as JSON string
};
