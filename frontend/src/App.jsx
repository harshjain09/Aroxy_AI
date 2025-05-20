import { useState, useEffect } from 'react';
import API from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const fetchTasks = async () => {
    const res = await API.get('/');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList tasks={tasks} onEdit={setCurrentTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;