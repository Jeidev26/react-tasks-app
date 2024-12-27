import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex flex-col items-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold capitalize">{task.title}</h1>
      <h3 className="text-gray-500 text-sm">{task.description}</h3>
      <button className="bg-blue-600 rounded-md px-2 py-1 mt-4 hover:bg-black" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;



