import React from "react";

const RestaurantPage = (res) => {
  console.log(res.restaurant);
  return (
    <div className="resPage">
      <h1>
        <a href={res.restaurant.url}>{res.restaurant.title}</a>
      </h1>
      <h2>Contact</h2>
      <p>Phone: {res.restaurant.phone_numbers}</p>
      <p>Location: {res.restaurant.location.address}</p>
      <h2>
        <a href={res.restaurant.menu}>Menu</a>
      </h2>
    </div>
  );
};

export default RestaurantPage;
