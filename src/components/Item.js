import React, { useState } from "react";

function Item({ name, category }) {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [addtoCart, setaddtoCart] = useState(false);

  const handleCart = () => {
    setaddtoCart(!addtoCart);
  };

  return (
    <li className={addtoCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {addtoCart ? "Add To Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
