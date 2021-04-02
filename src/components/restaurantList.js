import React from "react";

import RestaurantCard from "./restaurantCard";

const RestaurantList = () => {
  let restaurants = [];
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard props={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
