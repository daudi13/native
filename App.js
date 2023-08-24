import React, { useState, useEffect} from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErroItem from "./src/components/ErroItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  console.log(loading, error, weather);

    if (weather && weather.list && !loading) {
      return (
        <NavigationContainer>
          <Tabs weather={weather} />
        </NavigationContainer>
      )
    }
      return (
      <View style={styles.container}>
        { error ? <ErroItem/> : <ActivityIndicator size={'large'} color={'blue'} />}
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  })
  
export default App; 