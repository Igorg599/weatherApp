import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import { Alert, StyleSheet, Text, View } from "react-native"
import axios from "axios"
import Loading from "./Loading"

const API_KEY = "c2d1935b0df91870ab15c09d3f83e0c0"

export default function () {
  const [loading, setLoading] = useState(true)

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    console.log(data)
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync()
      getWeather(latitude, longitude)
      setLoading(false)
      // сделать запрос к API
    } catch (error) {
      Alert.alert("Не могу определить местоположение", "Грустненько :(")
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  return loading ? <Loading /> : null
}
