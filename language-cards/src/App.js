

import './App.css';
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import Card from './components/card/Card';
import {categories} from "./helper/data"


function App() {
  


  return (
    <div className="App">
      <ReactIcon className='appIcon'/>

      <div className='card-container'>
        <h2>Languages</h2>
        {
        categories.map((card, index) => {
          const {name, img ,options} = card
          return(
            <Card key={index} name={name} img={img} options={options}/>
          )
        })
        }
      </div>
      
      



    </div>
  );
}

export default App;
