import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  let taskData;
  // check if local storage had data or not
  if (localStorage.getItem("dailyTasks") === null) {
    taskData = [];
  } else {
    // access only those task whose date is same as current task and after day changing it will disappear
    taskData = JSON.parse(localStorage.getItem("dailyTasks")).filter(
      (task) => task.date === new Date().getDay()
    );
  }

  // set the task on intial rendering of webapp
  useEffect(() => {
    setTask(taskData);
  }, []);

  // add new task and set to local storage
  const addTask = (newTask) => {
    newTask.id = uuidv4();
    newTask.isDone = false;
    newTask.date = new Date().getDay();
    setTask([...task, newTask]);
    taskData.push({
      id: newTask.id,
      data: newTask.data,
      isDone: newTask.isDone,
      date: newTask.date,
    });
    localStorage.setItem("dailyTasks", JSON.stringify(taskData));
  };

  // mark task completed
  const completeTask = (id) => {
    taskData = task.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isDone: !obj.isDone };
      }
      return obj;
    });
    setTask(taskData);
    localStorage.setItem("dailyTasks", JSON.stringify(taskData));
  };

  return (
    <TaskContext.Provider value={{ task, completeTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
