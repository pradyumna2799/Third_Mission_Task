import React from 'react';
import './App.css'
import { useState } from "react";
import Task from './components/Task';

function App(){
   const [tasks,setTasks] = useState(['Learn React','Build App','Write Code']) ;

   function addTask() {
    const newTask = document.getElementById("taskInput").value.trim();
    if(newTask === ""){
        return;
    }
    document.getElementById("taskInput").value ="";

    setTasks(t => [...t, newTask]);  
   }


   function removeTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
   }

  
   return (

    <div>
        <form>
      <h2 style={{color: "#002244"}}>Tasks list:</h2>
      {tasks.map((task, index) => (
                  <Task key={index} taskName={task} onRemove={() => removeTask(index)} />
            ))}


        <input type="text" id="taskInput" placeholder="Enter task name"/>
        <button type="button" onClick={addTask}>Add Task</button>

        </form>
    
    </div>
   );
}

export default App;