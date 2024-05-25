import express from "express";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

enum Status {
  pending = "pending",
  inProgress = "in-progress",
  completed = "completed",
}

type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
  dueDate: Date;
};

const app = express();

app.use(express.json());

const taskList: Task[] = [];

app.get("/tasks", (req: Request, res: Response) => {
  try {
    res.status(200).json(taskList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/tasks/:id", (req: Request, res: Response) => {
  try {
    const task = taskList.filter((t) => t.id === req.params.id);

    if (!task) {
      return res.status(400).json({ error: "Task not found" });
    }
    res.status(200).json(taskList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.post("/tasks", (req: Request, res: Response) => {
  try {
    const { title, description, status, dueDate } = req.body;
    taskList.push({
      id: uuidv4(),
      title: title,
      description: description,
      status: status,
      dueDate: dueDate,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const { title, description, status, dueDate } = req.body;
  const taskIndex = taskList.findIndex((task) => task.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  const updatedTask = {
    id: req.params.id,
    title,
    description,
    status,
    dueDate,
  };

  taskList[taskIndex] = updatedTask;
  res.status(200).json({ success: true });
});

app.delete("/tasks/:id", (req: Request, res: Response) => {
  const taskIndex = taskList.findIndex((task) => task.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  taskList.splice(taskIndex, 1);
  res.status(204).json({ success: true });
});

app.listen(process.env.PORT, () => {
  console.log("Server running at 3000");
});
