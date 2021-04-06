import React, { useState } from "react";

import RestaurantList from "./components/restaurantList";
import "./App.css";

import RestaurantContext from "./components/context/restaurantContext";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <div className="App">
        <RestaurantList />
      </div>
    </RestaurantContext.Provider>
  );
}

export default App;
