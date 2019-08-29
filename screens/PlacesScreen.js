import React from 'react';

import { CATEGORIES, PLACES } from '../data/dummy-data';
import MealList from '../components/MealList';

const PlacesScreen = props => {
  
  const catId = props.navigation.getParam('categoryId');

  const displayedPlaces = PLACES.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedPlaces} navigation={props.navigation} />;
};

PlacesScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default PlacesScreen;
