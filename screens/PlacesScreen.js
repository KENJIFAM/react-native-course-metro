import React from 'react';

import { CITIES, PLACES } from '../data/dummy-data';
import PlaceList from '../components/PlaceList';

const PlacesScreen = props => {
  
  const cityId = props.navigation.getParam('cityId');

  const displayedPlaces = PLACES.filter(
    place => place.cityId === cityId
  );

  return <PlaceList listData={displayedPlaces} navigation={props.navigation} />;
};

PlacesScreen.navigationOptions = navigationData => {
  const cityId = navigationData.navigation.getParam('cityId');

  const selectedCity = CITIES.find(city => city.id === cityId);

  return {
    headerTitle: selectedCity.title
  };
};

export default PlacesScreen;
