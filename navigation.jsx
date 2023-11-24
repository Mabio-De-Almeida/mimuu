import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import OrderComplete from "./screens/OrderComplete";
import ReservationScreen from "./screens/ReservationScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantDetailScreen} />
        <Stack.Screen
          name="Reserva"
          options={{ presentation: "modal" }}
          component={ReservationScreen}
        />
        <Stack.Screen
          name="Order"
          options={{ presentation: "fullScreenModal" }}
          component={OrderComplete}
        />
        <Stack.Screen
          name="Map"
          options={{ presentation: "fullScreenModal" }}
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
