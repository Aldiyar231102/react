import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sneakerData from "../../../api.json";
import "./SneakerPage.css";
import { GoHeart } from "react-icons/go";

function SneakerPage({ addToCart }) {
  let { id } = useParams();
  const [sneaker, setSneaker] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const foundSneaker = sneakerData.sneakers.find(
      (sneaker) => sneaker.id === parseInt(id)
    );
    setSneaker(foundSneaker);

    if (foundSneaker) {
      setPrice(foundSneaker.retail_price_cents / 100);
    }
  }, [id]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const item = {
        id: sneaker.id,
        name: sneaker.name,
        size: selectedSize,
        main_picture_url: sneaker.main_picture_url,
        price: price,
      };
      addToCart(item);
      alert("Товар добавлен в корзину!");
    } else {
      alert("Выберите размер перед добавлением в корзину.");
    }
  };

  if (!sneaker) {
    return <div>aaa</div>;
  }

  return (
    <div className="sneaker-page-container">
      <div className="image-container">
        <img
          className="image"
          src={sneaker.main_picture_url}
          alt={sneaker.name}
        />
      </div>
      <div className="text-container">
        <h1 className="name">{sneaker.name}</h1>
        <p className="price">${price}</p>
        <p className="story">{sneaker.story_html}</p>
        <div className="interaction-container">
          <select id="size" value={selectedSize} onChange={handleSizeChange}>
            <option value="" disabled selected>
              Выберите размер (Америка)
            </option>
            {sneaker.size_range.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div>
            <button className="addCart_button" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
            <button className="addToWishList">
              <GoHeart className="addToWishBtn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakerPage;
