import React from "react";

function Item({item, onRemoveItem}) {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>

      <div>
        <button type="button" onClick={() => onRemoveItem(item)}>Dismiss</button>
        <br />
      </div>
    </li>
  );
}

export default Item;
