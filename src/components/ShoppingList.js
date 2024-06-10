import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setcategory] = useState('All')
  const [filterdItem, setFilteredItems] = useState(items);

  function handleselect(e) {
    setcategory(e.target.value)
  
    const filterdItem = e.target.value === 'All'?
      items : items.filter(item => item.category === e.target.value)
    setFilteredItems(filterdItem)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleselect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterdItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
