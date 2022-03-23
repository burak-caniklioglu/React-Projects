import Card from "./components/cards/Card";
import {data} from "./helper/data";

console.log(data[0])

function App() {
  
  return (
    <div className="App">
      <Card cards = {data}/>
    </div>
  );
}

export default App;
