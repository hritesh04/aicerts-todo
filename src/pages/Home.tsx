import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../components/Home/Task";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${process.env.BACKEND_URL}/tasks`).then((tasks) => {
      setTaskList(tasks.data);
    });
  }, []);
  const handleDelete = async (id: string) => {
    const res = await axios.delete(`${process.env.BACKEND_URL}/tasks/${id}`);
    if (res.status === 200) {
      setTaskList((prev) => prev.filter((task) => task.id !== id));
    }
  };
  return (
    <div>
      <div className=" flex flex-wrap justify-start gap-2 p-8">
        {taskList.map((task) => (
          <Task data={task}>
            <button
              className=" w-full bg-[#e9e9e9] shadow-md border rounded-md p-2"
              onClick={() => {
                navigate(`/edit/${task.id}`);
              }}
            >
              EDIT
            </button>
            <button
              className=" rounded-md w-full bg-[#e9e9e9] border shadow-md p-2 text-red-600"
              onClick={() => handleDelete(task.id)}
            >
              DELETE
            </button>
          </Task>
        ))}
      </div>
    </div>
  );
};

export default Home;
