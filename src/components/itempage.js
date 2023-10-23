import React, { useState } from "react";
import details from "./Data";
import "./itempage.css";

function ItemPage({ itemData }) {
  return (
    <div className="item-container">
      <a href="#" className="previous">
        &laquo; Back
      </a>
      <div className="item-details">
        <img src={itemData.imageUrl} alt="" />
        <div className="about">
          <h1 className="item-name">{itemData.productName}</h1>
          {itemData.series && (
            <h3 className="item-series">{itemData.series}</h3>
          )}
          <p className="rating">{itemData.rating}</p>
          <h4 className="price">${itemData.price}</h4>
          <p className="item-info">{itemData.info}</p>
          <button className="bagbtn">Add To Bag</button>
        </div>
        <hr />
        <h2>DESCRIPTION</h2>
        <p className="description">{itemData.description}</p>
      </div>
    </div>
  );
}

export default ItemPage;
