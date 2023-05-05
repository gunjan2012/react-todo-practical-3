import "./style/App.css";
import AddTask from "./Components/AddTask";
import DateDay from "./Components/DateDay";
import TasksList from "./Components/TasksList";
import { TaskProvider } from "./Context/TaskContext";

const App = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center m-0">
      <div className="todo-container">
        <TaskProvider>
          <DateDay />
          <TasksList />
          <AddTask />
        </TaskProvider>
      </div>
    </div>
  );
};

export default App;
