const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div>
    {tasks.map(task => (
      <div key={task._id} className="p-4 border mb-2 rounded shadow">
        <h3 className="text-xl font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: <strong>{task.status}</strong></p>
        <div className="mt-2 space-x-2">
          <button onClick={() => onEdit(task)} className="bg-yellow-400 px-2 py-1 rounded">Edit</button>
          <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default TaskList;