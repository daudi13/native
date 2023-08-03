import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@epo/vector-icons';

const ListItem = (props) => {
  const {dt_txt, min, max, condition } = props;

  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Status.currentHeight || 0,
    backgroundColor: "royalblue"
  },
  image: {
    flex: 1,
  }
});

export default ListItem;