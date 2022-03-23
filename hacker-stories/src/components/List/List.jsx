import React from 'react'
import Item from '../Item/Item'

function List({list}) {
  return (
    <ul>
        {
            list.map(({objectID, ...item}) => (
                <Item key={objectID} {...item} />
            ))
        }
    </ul>
  )
}

export default List