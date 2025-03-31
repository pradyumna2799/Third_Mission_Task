import './App.css';
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';

function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks,setTasks] = useState([]);

    function handleSubmit(e){

        e.preventDefault();

        if(tasks.find(task =>  task.toLowerCase() === inputValue.toLowerCase())){
            return;
        }
    
        if(inputValue){
          addtask(inputValue);
        }

        setInputValue("");
        
      }
    
      function addtask(task){
        setTasks(prevTask => [...prevTask,task]);
      }


  return (
   <div>
     
     <TaskForm handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue}/>

     {tasks.map((task,index)=>(
         <p key={index}>{task}</p>
    ))}
    </div>
  );
}

export default App;
