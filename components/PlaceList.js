import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import PlaceItem from './PlaceItem';

const PlaceList = props => {
  const renderPlaceItem = itemData => {
    return (
      <PlaceItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectPlace={() => {
          props.navigation.navigate({
            routeName: 'PlaceDetail',
            params: {
              placeId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderPlaceItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default PlaceList;
