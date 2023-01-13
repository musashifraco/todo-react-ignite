import styles from "./TaskEmpty.module.css";
import clipboard from "../assets/Clipboard.svg";

export function TaskEmpty() {
  return (
    <div className={styles.emptyTaskContainer}>
      <img src={clipboard}></img>
      <div className={styles.noticeContainer}>
        <p>
          <strong> Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
