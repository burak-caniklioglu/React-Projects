import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

function App() {
    return (
        <div className="App">
            <Header />
            <Tasks tasks = {tasks}/>
        </div>
    );
}

export default App;
