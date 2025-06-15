import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
  return (
    <div 
    className="w-screen, h-screen bg-gradient-to-r from-cyan-500 to-cyan-400">
    <div className="w-[500px] space-y-4 p-6 mx-auto">
        <div className="flex justify-center relative mb-6">
        <button 
        onClick={() => window.history.back()}
        className="bg-slate-300 p-2 rounded-md absolute left-0 top-0 bottom-0">
            <ChevronLeftIcon/>
        </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center pb-3">
            Task Details
        </h1>
        </div>
            <div className="bg-slate-300 p-4 rounded-md shadow-md">
                <h2 className="text-xl text-black font-semibold">{title}</h2>
                <p className="text-black">{description}</p>
            </div>
        </div>
    </div>
  );
}

export default TaskPage;