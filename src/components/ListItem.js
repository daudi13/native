import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const {item, temp, date, dateTextWrapper} = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}`}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "indianred",
    flex: 1,
    width: "90%"
  },
  temp: {
    fontSize: 20,
    color: "white"
  },
  date: {
    fontSize: 15,
    color: "white"
  },
  dateTextWrapper: {
    flexDirection: "column"
  }
});

export default ListItem;