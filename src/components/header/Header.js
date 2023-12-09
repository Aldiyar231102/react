import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <div className="leftSide">
        <Link to="/">
          <h1 className="headerTitle">URBAN SOLES</h1>
        </Link>
      </div>
      <div className="rightSide">
        <div className="wishListBlock">
          <Link to="/wishlist">
            <button className="wishListButton">
              <GoHeart className="wishList" />
            </button>
          </Link>
        </div>
        <div className="cartBlock">
          <Link to="/cart">
            <button className="cartButton">
              <AiOutlineShoppingCart className="cartIcon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
