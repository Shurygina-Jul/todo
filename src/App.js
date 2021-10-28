import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import DraggableTodo from "./components/Draggable/Draggable";

function App() {
 
  return (
    <div className="App">
<DraggableTodo/>
<Counter/>
    </div>
  );
}

export default App;
