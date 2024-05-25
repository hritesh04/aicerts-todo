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
