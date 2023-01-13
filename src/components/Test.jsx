import { useState } from "react";

export const Test = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleAddTask() {
    input !== "" &&
      setTasks([
        ...tasks,
        {
          isDone: false,
          body: input,
        },
      ]);
    setInput("");
  }

  function handleToggleTaskCheck() {}
  function handleRemoveTask() {}

  const doneTasks = tasks.filter((task) => task.isDone === true);

  return (
    <>
      <p className="bg-zinc-700 mb-4 p-1 flex items-center justify-center">
        Completed tasks: {doneTasks.length}
      </p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2">
          <input
            className="bg-transparent border border-violet-500 px-2 py-1 rounded"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="task"
            id="task"
          />
          <button
            className="bg-violet-500 px-2 py-1 rounded"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task, id) => (
            <div
              className="px-3 py-1 flex bg-violet-700 rounded gap-2 items-center"
              key={task.body}
            >
              <input
                checked={task.isDone}
                onChange={() => handleToggleTaskCheck()}
                type="checkbox"
              />
              <p>{task.body}</p>
              <button onClick={() => handleRemoveTask()}></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
