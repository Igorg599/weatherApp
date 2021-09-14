import React from "react"
import propTypes from "prop-types"
import { StyleSheet, Text, View } from "react-native"

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}°C</Text>
    </View>
  )
}

export default Weather

Weather.propTypes = {
  temp: propTypes.any,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
