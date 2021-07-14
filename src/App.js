import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import React from "react";
import Todo from "./components/Todo";
import todoIcon from "./img/todo-icon.png";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="icon">
          <img src={todoIcon} alt="Todo Icon" height="100" width="100" />
        </div>
        <Todo />
      </div>
    </>
  );
}

export default App;
