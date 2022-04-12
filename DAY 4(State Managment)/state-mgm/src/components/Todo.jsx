import { useState } from "react"

import { TodoInput} from "./Todoinput"

import {TodoItem} from "./TodoItem"

export const Todo=()=>{
    const [todos,setTodos] =useState([])


    const addTodo = (data)=>{
        // setTodos([...todos])
        let arr = todos;
        arr.push(data)
        setTodos([...arr])

        // console.log(data)
        // console.log(todos)
    }
    return(
        <div>
            <TodoInput  addTodo={addTodo}/>
        {todos.map((item)=>{
            // {console.log(item)}
           return (
               <div className="item">
                    <TodoItem todo ={item}/>
               </div>
           
           )
           
        })}

        {/* {todos.map((e)=>{
            <div>{e}</div>
        })} */}
        </div>
    )
}