import React, { useState } from "react";

import Modal from "./modal/modal";
import useModal from "./modal/useModal";
import "./modal/modal.scss";

import RestaurantPage from "./restaurantPage";

const RestaurantCard = (restaurant) => {
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

  return (
    <div
      className="card"
      key={restaurant.title}
      onClick={() => (
        setModalState(<RestaurantPage restaurant={restaurant} />), toggle()
      )}
    >
      <Modal isShowing={isShowing} hide={toggle} component={modalState} />
      <h2 className="title">{restaurant.title}</h2>
      <img className="restaurantPic" src={restaurant.image_url} />
      <h4 className="summary">{restaurant.description}</h4>
    </div>
  );
};

export default RestaurantCard;
