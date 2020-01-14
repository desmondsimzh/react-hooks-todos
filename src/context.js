import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "Do laundry", complete: false },
    { id: 3, text: "Finish Project", complete: false },
    { id: 4, text: "Go toilet", complete: true }
  ],
  currentTodo:{}
});

export default TodosContext;