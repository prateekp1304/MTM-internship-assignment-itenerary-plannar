import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (oldTask, newTask) => {
    setTasks(tasks.map((task) => (task === oldTask ? newTask : task)));
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Itinerary Planner
        </Typography>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </Box>
    </Container>
  );
};

export default App;
