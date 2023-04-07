import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Add Some Products</p>;
  } else {
    message = (
      <div>
        <h3>Thanks For wasting money!</h3>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length===1? 'red':'orange'}>Order Summary: {cart.length}</h2>
      {cart.length > 2 ? <span className="purple">Buy More</span> : <span className="red">Why So less?</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button
            onClick={() => {
              handleRemoveFromCart(tshirt._id);
            }}
          >
            X
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Boooner</p>}
      {cart.length === 3 || <h3>Its not three </h3>}
    </div>
  );
};

export default Cart;
