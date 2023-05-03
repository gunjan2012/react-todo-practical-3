// Add task button component
import TaskContext from "../Context/TaskContext";
import { useState, useContext } from "react";

const AddTask = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const { addTask } = useContext(TaskContext);
  // display error message when the error set to true
  const errorMessage = {
    display: error ? "block" : "none",
  };

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  });
  // click on the plus button to show input field
  const taskInput = () => setShow(true);
  // capture user input when user start typing
  const handleTaskChange = (event) => {
    setData(event.target.value);
  };
  // check valid input and add that task to object and pass that object to one function which was coming from context
  // also set input field to empty
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data === "" || data.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      const newTask = {
        data,
      };
      addTask(newTask);
      setData("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        {show ? (
          <div className="w-100">
            <input
              className="task-input w-100"
              placeholder="Write Your Task Here"
              type="text"
              value={data}
              onChange={handleTaskChange}
              autoFocus
            />
            <div
              className="text-danger text-center fw-bolder"
              style={errorMessage}
            >
              Please Enter Task!!!!
            </div>
          </div>
        ) : (
          <div className="circle" onClick={taskInput} />
        )}
      </div>
    </form>
  );
};

export default AddTask;
