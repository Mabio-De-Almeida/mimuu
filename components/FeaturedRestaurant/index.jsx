import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import RestaurantCard from "./RestaurantCard";


const FeaturedRestaurant = () => {
  return (
    <View className="flex flex-col justify-start items-center w-full">
    <View className="flex flex-row justify-between items-center w-full px-4">
    <Text className="text-2xl font-bold text-gray-900">
      Explore
    </Text>
    <TouchableOpacity activeOpacity={0.8}>
      <Text className="text-md font-semibold text-gray-600">ver mais</Text>
    </TouchableOpacity>
  </View>


    <View
      className="mt-4 p-0 flex justify-start items-start"
      style={{ maxHeight: 300, height: "100%" }}
    >
     
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        className="px-4"
      >
        <RestaurantCard isLast={false} />
      </ScrollView>
      </View>

    </View>
  );
};

export default FeaturedRestaurant;

const styles = StyleSheet.create({
  scrollViewWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
