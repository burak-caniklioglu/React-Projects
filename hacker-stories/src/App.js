import React, {useState, useEffect} from "react";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import {stories} from "./helper/data"



function App() {

  const useMyHook = (key,initialValue) => {
    const [value, setValue] =  useState(localStorage.getItem(key) || initialValue)   /// Kendimize ait bir hook tasarladık.

    useEffect(() => {
      localStorage.setItem(key, value)
    },[key,value])

    return [value, setValue]
  }

  const [searchTerm,setSearchTerm] = useMyHook("search", "React")



  //  const [searchTerm, setSearchTerm] =useState(localStorage.getItem("search") || "React");            

    

    // useEffect(() => {
    //   localStorage.setItem("search", searchTerm)
    // },[searchTerm])



    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
 
  }
    const searchedstories = stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search onSearch= {handleSearch} searchTerm = {searchTerm}/>

      <List list = {searchedstories}/>
    </div>
  );
}

export default App;
