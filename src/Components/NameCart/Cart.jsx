import React from "react";
import "./Cart.css";

function Cart({ selectedNames }) {
  return (
    <div className="name-cart">
      <h3>Name Cart</h3>
      {selectedNames.length > 0 ? (
        selectedNames.map((name, index) => (
          <p key={index} className="cart-item">
            {name}
          </p>
        ))
      ) : (
        <p>No names added yet.</p>
      )}
    </div>
  );
}

export default Cart;
