import { useState } from "react";
import Tasks from "./components/tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Ir no cinema",
      description: "Ir no cinema assistir um filme",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ir no mercado",
      description: "Ir no mercado comprar frutas e verduras",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar React",
      description: "Estudar React para melhorar minhas habilidades de programação",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const deleteTask = tasks.filter(task => task.id !== taskId)
    setTasks(deleteTask);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen, h-screen bg-gradient-to-r from-cyan-500 to-cyan-400 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center pb-3">
          To Do App
        </h1>
        <AddTasks onAddTask={onAddTask}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
