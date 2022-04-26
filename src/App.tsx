import { useState } from "react";
import "./App.css";
import { Task } from "./interfaces/Task";
import logo from "./logo.svg";

interface Props {
  title: string;
}

export const App = ({ title }: Props): any => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <h1>{title}</h1>
      {tasks.map((task) => (
        <div>
          <h2>{task.title}</h2>
        </div>
      ))}
    </div>
  );
};
