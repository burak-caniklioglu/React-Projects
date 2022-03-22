
import './App.css';
import Home from './components/Main';
import Data from './components/data';
import { useState } from 'react';





function App() {

  const [liste,setListe] = useState(Data)



  
  return (
    <div className="App" >
      
      <Home liste = {liste} setListe={setListe}/>
    </div>
  );
}

export default App;
