import React, { useState } from "react";
import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItems = () => (dispatch) => {
  let itemarray = [];
  const idArr = [
    //list of random (working) restaurant id's since I couldn't get other endpoints working
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

  dispatch({ type: START_FETCHING });

  idArr.forEach((id) =>
    axios
      .get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, {
        //no documentation could only get this one edpoint working
        headers: {
          "user-key": "7749b19667964b87a3efc739e254ada2",
        },
      })
      .then(
        (response) => (itemarray.push(response.data), console.log(itemarray))
      )
      .catch((error) => dispatch({ type: FETCH_FAILURE, payload: error }))
  );
  dispatch({ type: FETCH_SUCCESS, payload: itemarray });
};
