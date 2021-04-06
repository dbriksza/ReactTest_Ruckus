import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import RestaurantCard from "./restaurantCard";

import { fetchItems } from "./actions/actions";

import SearchBar from "./searchBar";

const RestaurantList = (props) => {
  //states for populating restaurants list
  // const [restaurants, setRestaurants] = useState([]);

  // setRestaurants(props.items);

  useEffect(() => {
    props.fetchItems();
    console.log(props.items);
  }, []);

  const [tags, setTags] = useState(false);

  const filterRestaurants = (restaurants, query) => {
    //search feature with togglable tag filter
    if (!query) {
      return restaurants;
    }
    if (tags) {
      return restaurants.filter((restaurants) => {
        const restaurantsDesc = restaurants.cuisines.toLowerCase();
        return restaurantsDesc.includes(query.toLowerCase());
      });
    }

    return restaurants.filter((restaurants) => {
      const restaurantsName = restaurants.name.toLowerCase();
      return restaurantsName.includes(query.toLowerCase());
    });
  };

  //states for handling search
  const query = "";
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredRestaurants = filterRestaurants(props.items, searchQuery);

  const onValueChange = () => {
    setTags(!tags);
  };

  if (props.isFetching) {
    return <div>Loading restaurant information...</div>;
  }
  return (
    <div className="list">
      <h2 className="listTitle">An Arbitrary List of Restaurants</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="tags">
        <input
          type="checkbox"
          id="tags"
          value="tags"
          onChange={() => onValueChange()}
        />{" "}
        <p>include tags</p>
      </div>
      <div className="restaurants">
        {props.error && <p>{props.error}</p>}
        {filteredRestaurants &&
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchItems })(RestaurantList);

// export default RestaurantList;
