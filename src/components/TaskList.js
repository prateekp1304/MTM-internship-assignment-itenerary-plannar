import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
