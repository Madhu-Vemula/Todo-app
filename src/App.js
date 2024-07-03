import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  min-height: 100vh;
  padding: 20px;
  background-color: #aeeaf2;
`;

const Header = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
`;

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const editTask = (index) => {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      setTasks(tasks.map((task, i) => (i === index ? newTask : task)));
    }
  };

  return (
    <Container>
      <Header>To-Do List</Header>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </Container>
  );
};

export default App;
