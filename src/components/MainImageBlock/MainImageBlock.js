import React from "react";
import { Link } from "react-router-dom";
import "./MainImageBlock.css";

const MainImageBlock = () => {
  return (
    <div className="container">
      <div className="textBlock">
        <p className="sneakerText">
          Air Jordan 4 Retro OG 'Bred' 2019 это одна из наиболее культовых
          моделей кроссовок в линейке Air Jordan от Nike. Этот релиз, выпущенный
          в 2019 году, был очень ожидаемым и желанным среди поклонников
          кроссовок.
        </p>
        <Link to="/sneaker/507844">
          <button className="lookButton">Смотреть</button>
        </Link>
      </div>
      <div className="imageBlock"></div>
    </div>
  );
};

export default MainImageBlock;
