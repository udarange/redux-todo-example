import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import Todo from '../components/Todo';
import React from 'react';


export default function VisibleTodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const visibilityFilter = useSelector(state => state.visibilityFilter)

  function getVisibleTodos(todos, filter) {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }

  return (
    <ul>
      {getVisibleTodos(todos, visibilityFilter).map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
      ))}
    </ul>
  );
};


