import "./App.css";
import Todo from "./Components/Todo";
import Todolist from "./Components/Todolist";
import Counter from "./Components/Counter"

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
      <Todolist />
    </div>
  );
}

export default App;
