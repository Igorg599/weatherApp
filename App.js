import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import * as Location from "expo-location"
import { StyleSheet, Text, View } from "react-native"
import Loading from "./Loading"

export default function () {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync()
    console.log(location)
  }
  useEffect(() => {
    getLocation()
  }, [])

  return <Loading />
}
