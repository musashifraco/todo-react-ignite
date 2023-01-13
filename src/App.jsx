import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import styles from "./App.module.css";
import "./components/global.css";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <CreateTask />
      </main>
    </div>
  );
}
