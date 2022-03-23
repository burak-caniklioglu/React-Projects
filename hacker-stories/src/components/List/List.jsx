import React from 'react'
import Item from '../Item/Item'

function List({list, onRemoveItem}) {
  return (
    <ul>
        {
            list.map((item) => (
                <Item key={item} item={item} onRemoveItem={onRemoveItem}/>
            ))
        }
    </ul>
  )
}

export default List