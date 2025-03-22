import './Task.css';
function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span>{task.content}</span>
            <button  type="button" onClick={() => toggleComplete(task.id)}>Complete</button>
            <button type="button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Task;
