
import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import ProductItem from './components/Card/cardItem';


function App() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {setProducts(response.data)});
  }, []);   //async await siz hali 

  // const res = await axios.get('https://fakestoreapi.com/products');
  // setProducts(res.data);
  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>
        <ProductItem/>
      </div>
      ) )}
    </div>
  );
}

export default App;
