import React from 'react'
import Data from './data';
import Button from './Button';
import Input from './input';

function Main({liste, setListe}) {

    

    function handleClick(id){
        
        let tempListe = liste.filter((item)=> item.id !== id  )
        setListe(tempListe)
        
    }

    

  return (
    <div >
        {liste.length}
        <p>Birthday Today</p>
        <ul>
        {
            
            liste.map((item)=>{
                const {id, name, age, img} = item
                return (
                    <li className='birthday-people' key={id}>
                        <div className='person-image'>
                            <img src={img} />
                        </div>
                        <div className='person-info'>
                            <h1>{name}</h1>
                            <p>{age} years</p>
                        </div>
                        <Button className="clear-button" type="button" onClickPrp={() => handleClick(id)}>Clear All</Button>
                    </li>
                )
            })
        }
        </ul>

        

        
        
        
    </div>
  )
}

export default Main