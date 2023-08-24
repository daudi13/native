import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import IconText from "../components/IconText";
import moment from "moment";

const City = ({weatherData}) => {

  const { container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    rowLayout,
    populationText,
    riseWrapper,
    riseText
  } = styles

  const {name, country, population, sunrise, sunset} = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population ${population}`}
            bodyTextStyles={populationText} />
        </View>
        <View style={[riseWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"black"}
            bodyText={moment(sunrise).format('h:mm a')}
            bodyTextStyles={riseText
            } />
          <IconText
            iconName={"sunset"}
            iconColor={"black"}
            bodyText={moment(sunset).format('h:mm a')} bodyTextStyles={riseText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 20
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold"
  },
    populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: 'bold'
  },
  riseWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
    fontWeight: "bold"
  },
  riseText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  rowLayout: {
    flexDirection: "row",
    alignItems:"center"
  }
})

export default City;