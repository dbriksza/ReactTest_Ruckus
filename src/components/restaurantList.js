import React, { useEffect, useState } from "react";
import axios from "axios";

import RestaurantCard from "./restaurantCard";

import SearchBar from "./searchBar";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [ready, setReady] = useState(false);
  const idArr = [
    10000011,
    10000012,
    10000013,
    10000014,
    10000015,
    10000016,
    10000017,
    10000018,
    10000019,
  ];

  const filterRestaurants = (restaurants, query) => {
    if (!query) {
      return restaurants;
    }

    return restaurants.filter((restaurants) => {
      const restaurantsName = restaurants.name.toLowerCase();
      return restaurantsName.includes(query.toLowerCase());
    });
  };

  const query = "";
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredRestaurants = filterRestaurants(restaurants, searchQuery);

  useEffect(() => {
    idArr.forEach((id) =>
      axios
        .get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, {
          headers: {
            "user-key": "7749b19667964b87a3efc739e254ada2",
          },
        })
        .then(
          (res) => (
            setRestaurants((restaurants) => [...restaurants, res.data]),
            console.log(restaurants)
          )
        )
        .catch((error) => {
          console.error(error);
        })
    );
    setReady(true);
  }, []);
  if (restaurants < 9) {
    return <div>Loading restaurant information...</div>;
  }
  return (
    <div className="list">
      <h2 className="listTitle">An Arbitrary List of Restaurants</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="restaurants">
        {ready &&
          filteredRestaurants.map(
            (restaurant) => (
              console.log(restaurant),
              (
                <div>
                  <RestaurantCard
                    title={restaurant.name}
                    phone_numbers={restaurant.phone_numbers}
                    location={restaurant.location}
                    menu={restaurant.menu_url}
                    description={restaurant.cuisines}
                    url={restaurant.url}
                  />
                </div>
              )
            )
          )}
      </div>
    </div>
  );
};

export default RestaurantList;
