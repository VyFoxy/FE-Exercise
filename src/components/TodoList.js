import React from "react";
import { Typography } from "@material-ui/core";
import "./TodoList.css";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import axios from "axios";
import Todos from "./Todos";
import Card from './Card';
//import { spacing } from '@mui/system';
const TodoList = () => {
  const [state, setState] = useState({
    todos: [],
  });

  const addTodo = (title) => {
    const todoData = {
      id: state.todos.length+1,
      title: title,
      completed: false,
    };
    
    setState({
          todos: [...state.todos, todoData],
        });
  };

  const deleteTodo = (id) => {
        setState({
          todos: [
            ...state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
  };
  
  
  return (
    <div>
      <div className="headerTodo" align="center">
        <Typography variant="h4">Todo List</Typography>
        <AddTodo addTodo={addTodo} />
      </div>
      <Todos
        todos={state.todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoList;
