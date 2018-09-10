import React from "react";
import PropTypes from "prop-types";
import City from "./City";

const CitiesList = props => {
  return (
    <div>
      {props.cities.map(city => <City key={city.id} citizenCity={city} />)}
    </div>
  );
};

// type check and validate the type of data being passed To this component

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default CitiesList;
