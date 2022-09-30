import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export const screenOptions = () => {
  return {
    tabBarStyle: { paddingBottom: 4 },
    tabBarActiveTintColor: "#E8880F",
  };
};

export const optionsRestaurants = () => {
  return {
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="restaurant" color={color} size={size} />
    ),
  };
};

export const optionsMap = () => {
  return {
    tabBarIcon: ({ color, size }) => (
      <Feather name="map-pin" color={color} size={size} />
    ),
  };
};

export const optionsSettings = () => {
  return {
    tabBarIcon: ({ color, size }) => (
      <Feather name="settings" color={color} size={size} />
    ),
  };
};
