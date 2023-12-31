import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './EmptyListView.style';

export default function EmptyListView() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No results found</Text>
    </View>
  );
}
