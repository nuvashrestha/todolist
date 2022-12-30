import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className = "container my-3" style={myStyle}>
        <h3 className = "my-3"> ToDo List </h3>
        {props.todos.length ===0? "There are no todos to show. Please add todos to display here.":
        props.todos.map((todo)=> {
          console.log(todo.sno);
          return (<TodoItem todo ={todo} key ={todo.sno} onDelete={props.onDelete}/> 
          )
        })
        }
        
    </div>
  )
}
