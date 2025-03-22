import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App(){
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();

        if (!inputValue) {
            return;
        }

        if (tasks.find(task => task.content === inputValue)) {
         return; 
     }
     

        addtask(inputValue);
        setInputValue("");
    }

    function addtask(task){
        setTasks((prevTask) => [...prevTask, { id: Date.now(), content: task, completed: false }]);
    }

    function toggleComplete(id){
      setTasks(prevTasks =>
          prevTasks.map(task =>
              task.id === id ? { ...task, completed: !task.completed } : task
          )
      );
  }
  
    function deleteTask(id){
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <button type="submit">Add Task</button>
            </form>  

            {tasks.map((task) => (
                <Task key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
            ))}
        </div>
    ); 
}

export default App;
