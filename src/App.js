import React from 'react';
import './App.css';
import Task from './components/Task'


function App() {

  const tasks = ['Learn React','Build App','Write Code']; 
  
    return (
      
        <div> 
            
            <Task taskName = {tasks.map((task)=>
            <h2>{task}</h2>)}/>
            
        </div>
    );
}



export default App;
