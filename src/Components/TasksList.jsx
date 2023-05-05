import { useContext } from "react";
import SingleTask from "./SingleTask";
import TaskContext from "../Context/TaskContext";

const TasksList = () => {
  const { task } = useContext(TaskContext);

  return (
    <div className="task-list">
      {task.length === 0 ? (
        <img
          className="notask-image"
          src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1060&t=st=1683021980~exp=1683022580~hmac=e3b432c04f6a259e76a69cbe49b5ee4e9e6d6d07f40e9b924bfa551f9fc5d221"
          alt="Task Completed"
        />
      ) : (
        task.map((item) => <SingleTask key={item.id} item={item} />)
      )}
    </div>
  );
};

export default TasksList;
