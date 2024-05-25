const Task = ({
  data,
  children,
}: {
  data: Task;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-1/6 p-4 shadow-xl bg-[#eef078] rounded-lg">
      <div className="p-2 flex flex-col gap-2 rounded-md">
        <h1 className=" text-3xl">{data.title}</h1>
        <p className=" text-md truncate">{data.description}</p>
        <div className=" flex justify-between">
          <span>{data.status}</span>
          <span>Due : {new Date(data.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className=" flex mt-4 gap-2 justify-between">{children}</div>
    </div>
  );
};

export default Task;
