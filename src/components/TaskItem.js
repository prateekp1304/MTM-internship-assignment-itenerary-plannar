import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleUpdate = () => {
    updateTask(task, newTask);
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <TextField
            variant="outlined"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            fullWidth
          />
          <Button
            onClick={handleUpdate}
            color="primary"
            variant="contained"
            sx={{ ml: 1 }}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <ListItemText primary={task} />
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => setIsEditing(true)}
          >
            <Edit />
          </IconButton>
        </>
      )}
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteTask(task)}
      >
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
