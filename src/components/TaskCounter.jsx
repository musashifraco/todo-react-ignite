import styles from "./TaskCounter.module.css";

export function TaskCounter({ tasksCreated, tasksDone }) {
  return (
    <header className={styles.list}>
      <div className={styles.containerTasksCreated}>
        <p>
          Tarefas Criadas <span>{tasksCreated}</span>
        </p>
      </div>
      <div className={styles.containerTasksCompleted}>
        <p>
          Concluidas
          <span>
            {tasksDone} de {tasksCreated}
          </span>
        </p>
      </div>
    </header>
  );
}
