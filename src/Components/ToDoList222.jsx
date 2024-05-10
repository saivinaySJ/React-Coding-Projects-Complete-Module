import { useState } from "react";
function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleNewTask(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  }

  function handleDeleteTask(id) {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  }

  function toggleTask(id) {
    const toggleTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(toggleTask);
  }
  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleNewTask}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
