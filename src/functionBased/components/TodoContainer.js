import React, {useState, useEffect} from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

import {v4 as uuidv4} from "uuid"
import {BrowserRouter,Route, Routes} from "react-router-dom"


const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos)
    const handleChange = id =>{
        setTodos(prevState =>
            prevState.map(todo =>{
                if(todo.id === id){
                    return{
                    ...todo, completed: !todo.completed,
                    }
                }
                return todo
            })
            ) } //... is the spread operator
    const delTodo= id =>{
        setTodos([
            ...todos.filter(todo=>{
                return todo.id !== id
            }),  
            ])
        }

    const addTodoItem = title =>{
        const newTodo = {
            id:uuidv4(),
            title:title,
            completed: false
        }
        setTodos([...todos, newTodo])
        }

    const setUpdate =(updatedTitle, id)=>{
        setTodos(
            todos.map(todo=>{
                if(todo.id === id)
                {
                todo.title = updatedTitle
            }
            return todo})
    )}
    function getInitialTodos(){
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }
    
    useEffect(()=> {
        //storing todos
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])
     //this effect only triggers on todos changing
    return(
    
        <div className="container">
                <div className="inner">
                <Header/>
                <InputTodo addTodoProps={addTodoItem}/>
                <TodoList todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate}/>
            </div>
        </div>
    
        
    )
    }
    
export default TodoContainer;
// react.fragment can be used instead of <div></div>