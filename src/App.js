import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainImage from "./components/MainImageBlock/MainImageBlock";
import CatalogBlock from "./components/CatalogBlock/CatalogBlock";
import Category from "./components/CategoryBlock/CategoryBlock";
import CartPage from "./components/pages/cartPage/CartPage";
import Footer from "./components/Footer/Footer";
import SneakerPage from "./components/pages/sneakerPage/SneakerPage";
import sneakerData from "./api.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <Router>
      <div className="wrapper font-Futura">
        <header>
          <Header onSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <MainImage />
                  <Category onCategoryChange={handleCategoryChange} />
                  <CatalogBlock
                    sneakers={sneakerData.sneakers}
                    onSearch={handleSearch}
                    selectedCategory={selectedCategory}
                    addToCart={addToCart}
                  />
                </React.Fragment>
              }
            />
            <Route
              path="/sneaker/:id"
              element={<SneakerPage addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
