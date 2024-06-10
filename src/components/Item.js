
import  React, {useState} from "react";


function Item({ name, category }) {
  const[inTheCard, setItem]= useState(false)

 
  function handleClick() {
    setItem(inTheCard => !inTheCard)
    
  }
  return (
    <li className={inTheCard ? 'in-cart' :''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inTheCard? 'Remove From Cart' :'Add to Cart'}</button>
    </li>
  );
}

export default Item;
