
import './App.css';
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import Card from './components/card/Card';
import {categories} from "./helper/data"


function App() {
  return (
    <div className="App">
      <ReactIcon className='appIcon'/>
      <Card {...categories}/>
    </div>
  );
}

export default App;
