import React from "react";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <img className="restaurantPic" src={props.picture} />
      <h4 className="summary">{props.summary}</h4>
    </div>
  );
};

export default RestaurantCard;
