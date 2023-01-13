import styles from "./CreateTask.module.css";
import plusIcon from "../assets/plus-icon.svg";
import { Tasks } from "./Tasks";
import { TaskCounter } from "./TaskCounter";
import { TaskEmpty } from "./TaskEmpty";
import { useState } from "react";

export function CreateTask() {
  const [tasks, setTasks] = useState([""]);
  const [newTaskText, setNewTaskText] = useState([""]);
  const [tasksDone, setTasksDone] = useState([""]);

  function handleSetTasksDone(taskName) {
    if (tasksDone.includes(taskName)) {
      const tasksDoneWithoutDeletedOne = tasksDone.filter((task) => {
        return task !== taskName;
      });
      return setTasksDone(tasksDoneWithoutDeletedOne);
    }
    setTasksDone([...tasksDone, taskName]);
  }

  function handleDeleteTask(taskName) {
    const taskListWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskName;
    });
    const tasksDoneWithoutDeletedOne = tasksDone.filter((task) => {
      return task !== taskName;
    });

    setTasksDone(tasksDoneWithoutDeletedOne);
    setTasks(taskListWithoutDeletedOne);
  }

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.toDoListContainer}>
      <div className={styles.taskInputContainer}>
        <textarea
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa"
          type="text"
          required
        />
        <button type="submit">
          Criar <img src={plusIcon} alt="" />
        </button>
      </div>
      <TaskCounter
        tasksCreated={tasks.length - 1}
        tasksDone={tasksDone.length - 1}
      />
      <div className={styles.taskBoardContainer}>
        {tasks.length > 1 ? (
          tasks.map((task) => {
            if (task === "") return null;
            return (
              <Tasks
                key={task}
                name={task}
                onHandleDeleteTask={handleDeleteTask}
                onHandleSetTasksDone={handleSetTasksDone}
              />
            );
          })
        ) : (
          <TaskEmpty />
        )}
      </div>
    </form>
  );
}
