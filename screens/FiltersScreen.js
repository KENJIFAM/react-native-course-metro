import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isReligious, setIsReligious] = useState(false);
  const [isNatural, setIsNatural] = useState(false);
  const [isMuseum, setIsMuseum] = useState(false);
  const [isPalace, setIsPalace] = useState(false);
  const [isSquare, setIsSquare] = useState(false);
  const [isLandmark, setIsLandmark] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      religious: isReligious,
      natural: isNatural,
      museum: isMuseum,
      palace: isPalace,
      square: isSquare,
      landmark: isLandmark
    };

    console.log(appliedFilters);
  }, [isReligious, isNatural, isMuseum, isPalace, isSquare, isLandmark]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Religious"
        state={isReligious}
        onChange={newValue => setIsReligious(newValue)}
      />
      <FilterSwitch
        label="Natural"
        state={isNatural}
        onChange={newValue => setIsNatural(newValue)}
      />
      <FilterSwitch
        label="Museum"
        state={isMuseum}
        onChange={newValue => setIsMuseum(newValue)}
      />
      <FilterSwitch
        label="Palace"
        state={isPalace}
        onChange={newValue => setIsPalace(newValue)}
      />
      <FilterSwitch
        label="Square"
        state={isSquare}
        onChange={newValue => setIsSquare(newValue)}
      />
      <FilterSwitch
        label="Landmark"
        state={isLandmark}
        onChange={newValue => setIsLandmark(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Places',
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
