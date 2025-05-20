import { useState, useEffect } from 'react';
import API from '../api';

const TaskForm = ({ fetchTasks, currentTask, setCurrentTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  useEffect(() => {
    if (currentTask) {
      setFormData(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentTask) {
        await API.put(`/${currentTask._id}`, formData);
      } else {
        await API.post('/', formData);
      }
      fetchTasks();
      setFormData({ title: '', description: '', status: 'Pending' });
      setCurrentTask(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full mb-2 p-2 border"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full mb-2 p-2 border"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full mb-2 p-2 border"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {currentTask ? 'Update' : 'Add'} Task
      </button>
    </form>
  );
};

export default TaskForm;
