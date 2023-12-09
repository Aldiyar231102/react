import React, { useState } from "react";
import "./CategoryBlock.css";

const CategoryBlock = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="category">
      <div
        className={`basketballCategory ${
          selectedCategory === "basketball" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("basketball")}
      >
        <p>Basketball</p>
      </div>
      <div
        className={`lifestyleCategory ${
          selectedCategory === "lifestyle" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("lifestyle")}
      >
        <p>Lifestyle</p>
      </div>
    </div>
  );
};

export default CategoryBlock;
