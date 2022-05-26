import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/axios";

type ITasks = {
  id: string;
  taskName: string;
  isCompleted: boolean;
}[];

type HandleEditArgs = {
  id: string;
  taskName: string;
  isCompleted: boolean;
};

type ITaskContext = {
  tasks: ITasks;
  handleEdit({}: HandleEditArgs): void;
  addTask(taskName: string): Promise<void>;
  handleDelete(id: string): void;
};

const TaskContext = createContext({} as ITaskContext);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITasks>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const response = await api.get<ITasks>("/api/v1/tasks");
      const tasks = response.data;
      console.log(tasks);
      setTasks(tasks);
    }
    fetchInitialData();
  }, []);

  const handleEdit = ({ id, taskName, isCompleted }: HandleEditArgs) => {
    const tasksUpdated = tasks.map((task) =>
      task.id === id ? { ...task, taskName, isCompleted } : task
    );
    setTasks(tasksUpdated);
  };

  const addTask = async (taskName: string) => {
    try {
      const response = await api.post("/api/v1/tasks", { taskName });
      const task = response.data;
      setTasks((tasks) => [...tasks, task]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete("/api/v1/tasks", { data: { id } });
      if (response.statusText === "OK") {
        setTasks((oldTasks) => {
          const tasksFiltered = oldTasks.filter((task) => task.id !== id);
          return [...tasksFiltered];
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, handleEdit, addTask, handleDelete }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => {
  const value = useContext(TaskContext);
  return { ...value };
};
