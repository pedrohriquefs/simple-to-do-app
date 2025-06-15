import { useState } from "react";

function AddTasks({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

return(
  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <input 
    type="text" 
    placeholder="Digite aqui sua tarefa"
    maxlength="30"
    className="border border-slate-300 outline-2 outline-offset-2 rounded-md p-2"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    >
    </input>
    <input
    type="text"
    placeholder="Digite aqui a descrição da tarefa"
    minlength="4"
    className="border border-slate-300 outline-2 outline-offset-2 rounded-md p-2"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    >
    </input>
    <button 
    onClick={() => {
        if (!title.trim() || !description.trim()) {
            alert("Title and description are required!");
            return;
        }
        if (title.length > 30) {
            alert("Title may not exceed 30 characters.");
            return;
        }
        if (description.length < 4) {
            alert("Description may not be less than 4 characters.");
            return;
        }
        onAddTask(title, description);
        setTitle("");
        setDescription("");
    }}
    className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar Tarefa
    </button>
  </div>
  )
};

export default AddTasks;
