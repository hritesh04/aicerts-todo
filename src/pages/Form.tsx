import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [due, setDue] = useState("");
  const navigate = useNavigate();
  const route = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const res = await axios.get(`${process.env.BACKEND_URL}/tasks/${id}`);
        const task = res.data[0];
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
        setDue(new Date(task.dueDate).toISOString().split("T")[0]);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    if (route.pathname === "/new") {
      const res = await axios.post(`${process.env.BACKEND_URL}/tasks`, {
        title,
        description,
        status,
        due,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } else if (route.pathname === `/edit/${id}`) {
      const res = await axios.put(`${process.env.BACKEND_URL}/tasks/${id}`, {
        title,
        description,
        status,
        due,
      });

      if (res.status === 200) {
        navigate("/");
      }
    }
  };

  return (
    <div className="h-[88vh] flex">
      <div className="flex flex-col gap-4 p-4 m-auto shadow-2xl py-8 rounded-lg w-1/4">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            placeholder="title"
            value={title}
            className="border rounded-md p-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Description</label>
          <input
            type="text"
            placeholder="description"
            value={description}
            className="border rounded-md p-2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Status</label>
          <select
            className="border rounded-md p-1 w-fit"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>
          <label className="font-semibold">Due</label>
          <input
            type="date"
            className="border rounded-md p-1 w"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-[#f7fa5c] rounded-md p-2"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Form;
