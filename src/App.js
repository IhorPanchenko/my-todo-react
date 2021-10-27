import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Go to the Grocery" />
      <Todo text="Make Lunch" />
      <Todo text="Learn React" />
    </div>
  );
}

export default App;
