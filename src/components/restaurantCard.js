import React from "react";

const RestaurantCard = (restaurant) => {
  return (
    <div className="card" key={restaurant.title}>
      <h2 className="title">{restaurant.title}</h2>
      <img className="restaurantPic" src={restaurant.image_url} />
      <h4 className="summary">{restaurant.description}</h4>
    </div>
  );
};

export default RestaurantCard;
