import grayCircle from "../assets/Grey-circle.png";
import greenSign from "../assets/Green-circle.ico";
import { useContext } from "react";
import TaskContext from "../Context/TaskContext";

const SingleTask = ({ item }) => {
  const { completeTask } = useContext(TaskContext);

  return (
    <div className="single-task-container d-flex align-items-center py-2">
      <div
        className="task"
        style={item.isDone ? { opacity: 0.3 } : { opacity: 1 }}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={item.data}
      >
        {item.data}
      </div>
      <img
        className="task-sign"
        style={item.isDone ? { opacity: 1 } : { opacity: 0.3 }}
        src={item.isDone ? greenSign : grayCircle}
        width={35}
        onClick={() => completeTask(item.id)}
      />
    </div>
  );
};

export default SingleTask;
