import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categorySeparator: {
    width: 8,
  },
});

const CategorySeparator = React.memo(() => {
  return <View style={styles.categorySeparator} />;
});

CategorySeparator.displayName = 'CategorySeparator';

export default CategorySeparator;
