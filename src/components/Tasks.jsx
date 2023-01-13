import styles from "./Tasks.module.css";
import trash from "../assets/Trash.svg";

export function Tasks({ name, onHandleSetTasksDone, onHandleDeleteTask }) {
  function handleSetTaskAsDone() {
    onHandleSetTasksDone(name);
  }

  function handleDeleteTask() {
    onHandleDeleteTask(name);
  }

  return (
    <div className={styles.list}>
      <label htmlFor="">
        {" "}
        <input onClick={handleSetTaskAsDone} type="checkbox" />
        <p>{name}</p>
      </label>
      <button name={name} onClick={handleDeleteTask}>
        <img src={trash} alt="" />
      </button>
    </div>
  );
}
