import React from "react";

import  "./Todo.css" ;
import { useState, useEffect } from "react";
import { TodoForm } from "./Todo/TodoForm";
import { TodoData } from "./Todo/TodoData";
import {TodoList} from "./Todo/TodoList"
import { getLocalStorageTodoData,setLocalStorageTodoData } from "./Todo/TodoLocalStorage";


export const Todo = () => {
   
        const [task,setTask] =useState( ()=> getLocalStorageTodoData());

   
 // todo add local storage
setLocalStorageTodoData(task);

// submit form 
     const handleFormSubmit= (inputValue) => {
    const {id, content , checked} = inputValue;

    
// if content is empty or not 
    if(!content) return ;
// if(task.includes(inputValue)){  // agr phle se same value h tho vo ffirse use store ni krega ..

//     return ; 
// }
const ifTodoContentMatched = task.find(
    (curTask) => curTask.content === content 
);
if(ifTodoContentMatched) return ;

setTask((prevTask) => [...prevTask , {id : id , content : content , checked:checked}]);

} ; 
  // todo add local storage
localStorage.setItem(TodosKey,JSON.stringify(task));


// delete task 
const handleDeleteTodo =(value) => {

const updateTask = task.filter((curTask) => curTask.content != value);  // filter ka kaam hota h new  array bnana agr ham ek element delte krege tho ye new array bnayega .
setTask(updateTask);
}

// Clear All task ya element 
const handleClearTodo= ()=>{
    setTask([]);
}
 
// Checked todo
const handleCheckTodo=(content) =>{
const updateTask = task.map((curTask) => {
    if(curTask.content === content){
        return {...curTask , checked: !curTask.checked }
    }else{
        return curTask;
    }
})
setTask(updateTask);
}
return  (
<section className="todo-container">
<header>
    <h1>Todo List </h1>
  <TodoData/>
</header>
<TodoForm onAddTodo= {handleFormSubmit} />
 {/* // here we do child to parent by props onAddTodo  */}
<section className="myUnOrdList">
    <ul>
        {
            task.map((curTask) => {
                return (
                // idher list likhni h 
              <TodoList keyys={curTask.id} 
              data={curTask.content}  
              checked ={curTask.checked} 
              onHandleDeleteTodo={handleDeleteTodo}
              onhandleCheckedTodo = {handleCheckTodo} />
                );
            })
        }
    </ul>
</section>
<section>
    <button className="clear-btn" 
    onClick={handleClearTodo}>Clear All</button>
</section>
</section>
)
}