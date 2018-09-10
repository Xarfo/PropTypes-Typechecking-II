import CitiesList from "./CitiesList";
import React from "react";
import PropTypes from "prop-types";

const City = props => {
  //console.log(props);
  return <li>{props.citizenCity.city}</li>;
};

City.propType = {
  citizenCity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.arrayOf(PropTypes.string)
  })
};

export default City;
