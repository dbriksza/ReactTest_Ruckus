import React, { useEffect, useState } from "react";
import axios from "axios";

import RestaurantCard from "./restaurantCard";

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
      {ready &&
        restaurants.map(
          (restaurant) => (
            console.log(restaurant),
            (
              <div>
                <RestaurantCard
                  title={restaurant.name}
                  //   image_url={restaurant.photos}
                  description={restaurant.cuisines}
                />
              </div>
            )
          )
        )}
    </div>
  );
};

export default RestaurantList;
