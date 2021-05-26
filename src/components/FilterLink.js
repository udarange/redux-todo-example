import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../actions";
import React from 'react';

export default function FilterLink({ filter, children }) {
  const dispatch = useDispatch()
  const visibilityFilter = useSelector(state => state.visibilityFilter)

  return (
    <button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      disabled={filter === visibilityFilter}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
}
