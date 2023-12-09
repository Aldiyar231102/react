import React from "react";
import "./CartPage.css";

const CartPage = ({ cartItems, removeFromCart }) => {
  const handleRemoveClick = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div>
        <div className="cartTitle">
            <h1>Корзина</h1>
        </div>
      <div className="cartContainer">
        {cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cart_image_container">
              <img
                className="cart_image"
                src={item.main_picture_url}
                alt={item.name}
              />
            </div>
            <div className="text">
              <p className="item_cart_name">{item.name}</p>
              <p className="item_cart_size">Размер: {item.size}</p>
              <button
                className="deleteButton"
                onClick={() => handleRemoveClick(item.id)}
              >
                Удалить из корзины
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
