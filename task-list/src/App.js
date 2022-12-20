import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";
import useFetch from "./hooks/useFetch";


const App = () => {

 const {pending,error,tasks,fetchTasksHandler} = useFetch()

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const addTaskHandler = (enteredText) => {
    fetchTasksHandler("POST", { text: enteredText });
  };

  const deleteItemHandler = (taskId) => {
    fetchTasksHandler("DELETE", { id: taskId });
  };

  const updateItemHandler = (taskId, taskText) => {
    fetchTasksHandler("PATCH", { id: taskId, text: taskText });
  };

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending === true && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && tasks !== null && error === null && (
          <TaskList
            items={tasks}
            onDeleteItem={deleteItemHandler}
            onEditItem={updateItemHandler}
          />
        )}
        {!pending && tasks === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No tasks availables. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;