import BackgroundPicture from "./BackgroundPicture";
import "./BestProduct.css"

import React from "react";

function BestProduct(props) {
  return (
    <div className="productContainer">
      <div className="productHeader">
        <h3 className="productName">{props.name}</h3>
      </div>
      <div className="ingredientContainer">
        <div className="ingredient">
          <span className="ingredientName">ingredient1:</span>{" "}
          {props.ingredient1} ,{" "}
          <span className="ingredientAmount">cantitate:</span>{" "}
          {props.cantitate1}
        </div>
        <div className="ingredient">
          <span className="ingredientName">ingredient2:</span>{" "}
          {props.ingredient2} ,{" "}
          <span className="ingredientAmount">cantitate:</span>{" "}
          {props.cantitate2}
        </div>
        <div className="ingredient">
          <span className="ingredientName">ingredient3:</span>{" "}
          {props.ingredient3} ,{" "}
          <span className="ingredientAmount">cantitate:</span>{" "}
          {props.cantitate3}
        </div>
        <div className="ingredient">
          <span className="ingredientName">ingredient4:</span>{" "}
          {props.ingredient4} ,{" "}
          <span className="ingredientAmount">cantitate:</span>{" "}
          {props.cantitate4}
        </div>
        <div className="ingredient">
          <span className="ingredientName">ingredient5:</span>{" "}
          {props.ingredient5} ,{" "}
          <span className="ingredientAmount">cantitate:</span>{" "}
          {props.cantitate5}
        </div>
      </div>
    </div>
  );
}


  export default BestProduct;