
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CatalogBlock.css";
import { AiOutlineSearch } from "react-icons/ai";

const CatalogBlock = ({ sneakers, onSearch, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleSneakers, setVisibleSneakers] = useState(12);
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  useEffect(() => {
    const filteredByCategory = selectedCategory
      ? sneakers.filter((sneaker) =>
          sneaker.category.includes(selectedCategory)
        )
      : sneakers;

    const filteredBySearch = filteredByCategory.filter((sneaker) =>
      sneaker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSneakers(filteredBySearch);
  }, [sneakers, selectedCategory, searchTerm]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleLoadMore = () => {
    setVisibleSneakers((prevVisibleSneakers) => prevVisibleSneakers + 12);
  };

  const formatPrice = (cents) => {
    const dollars = cents / 100;
    return `$${dollars.toFixed(0)}`;
  };

  return (
    <div className="catalog">
      <div className="searchInputContainer">
        <input
          type="text"
          placeholder="Поиск..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          <div className="searchIconContainer">
            <AiOutlineSearch className="searchIcon" />
          </div>
        </button>
      </div>
      <div className="sneaker-row">
        {filteredSneakers.slice(0, visibleSneakers).map((sneaker, index) => (
          <div key={index} className="sneaker-item">
            <Link to={`/sneaker/${sneaker.id}`}>
              <img src={sneaker.grid_picture_url} alt={sneaker.name} />
            </Link>
            <p className="sneakerBrand">{sneaker.brand_name}</p>
            <p className="sneakerName">{sneaker.name}</p>
            <p className="sneakerPrice">
              {formatPrice(sneaker.retail_price_cents)}
            </p>
          </div>
        ))}
      </div>
      {visibleSneakers < filteredSneakers.length && (
        <button className="loadMoreButton" onClick={handleLoadMore}>
          Загрузить ещё
        </button>
      )}
    </div>
  );
};

export default CatalogBlock;
