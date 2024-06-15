import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={2}
    >
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default TaskInput;
