import React from "react"
import propTypes from "prop-types"
import { StyleSheet, Text, View } from "react-native"

const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}°C</Text>
    </View>
  )
}

export default Weather

Weather.propTypes = {
  temp: propTypes.any,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
