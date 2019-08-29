import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { CITIES } from '../data/dummy-data';
import CityGridTile from '../components/CityGridTile';

const CitiesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CityGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Places',
            params: {
              cityId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CITIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CitiesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Cities',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default CitiesScreen;
