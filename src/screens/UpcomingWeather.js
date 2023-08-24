import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({weatherData}) => {
  const renderItem = (({ item }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  ));
  const {wrapper, image, container} = styles;
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}>
        <View style={container}>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: StatusBar.currentHeight - 50,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    flex: 1,
  }
})

export default UpcomingWeather;