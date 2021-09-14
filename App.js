import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import { Alert } from "react-native"
import axios from "axios"
import Loading from "./Loading"
import Weather from "./Weather"

const API_KEY = "c2d1935b0df91870ab15c09d3f83e0c0"

export default function () {
  const [loading, setLoading] = useState(true)
  const [temp, setTemp] = useState(null)
  const [condition, setCondition] = useState("Clear")

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
    setLoading(false)
    setTemp(temp)
    setCondition(weather[0].main)
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync()
      getWeather(latitude, longitude)
      // сделать запрос к API
    } catch (error) {
      Alert.alert("Не могу определить местоположение", "Грустненько :(")
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  )
}
