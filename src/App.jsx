import React from "react";
import AppName from "./AppName";
import ContainerAdd from "./Components/ContainerAdd";
import ContainerAdd1 from "./Components/ContainerAdd1";
import ContainerAdd2 from "./Components/ContainerAdd2";
import "./App.css";
function App() {
  return (
    <div className="todo-container text-center">
      <AppName />
      <ContainerAdd />
      <ContainerAdd1 />
      <ContainerAdd2 />
    </div>
  );
}

export default App;
