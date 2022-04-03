import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter/>

        
        
        
        
      

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
