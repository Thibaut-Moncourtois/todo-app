import React from "react";
import PropTypes from "prop-types";

const Task = ({ task, onTaskComplete }) => (
  <div>
    <p>My task</p>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <button onClick={() => onTaskComplete(task.id)}>Complete</button>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onTaskComplete: PropTypes.func.isRequired,
};

export default Task;
