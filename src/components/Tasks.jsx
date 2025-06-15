import { ChevronRightIcon, CheckIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate()
    function onSeeTaskClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between transition-all duration-500"
        >
          <span
            className={`text-left text-black p-2 rounded-md w-full ${
              task.isCompleted ? "bg-green-300 line-through" : "bg-slate-300"
            }`}
          >
            {task.title}
          </span>

          <div className="flex gap-2 ml-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`p-2 rounded-md ${
                task.isCompleted ? "bg-green-400" : "bg-slate-300"
              }`}
            >
              <CheckIcon />
            </button>
            <button
            onClick={() => {
              onSeeTaskClick(task);
            }}
            className="bg-slate-300 p-2 rounded-md">
            <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-300 p-2 rounded-md"
            >
              <Trash2Icon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
