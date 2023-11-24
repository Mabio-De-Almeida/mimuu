import { Image, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import bar1 from '../../../assets/images/restaurant/restaurante01.jpg';

import { useNavigation } from "@react-navigation/native";

// import restaurants from "./data";
import restaurants from "../../../database/index";

const RestaurantCard = (restaurant) => {
  const navigation = useNavigation();

  return restaurants?.map((restaurant, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        navigation.navigate('Restaurant', { ...restaurant });
      }}
    >
      <View
        className={`border border-gray-200 rounded-xl p-3 px-4 max-w-max w-100 mb-0 ${
          restaurant.isLast == true ? "mr-8" : "mr-4"
        }`}
        style={{ height: "96%" }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          className="flex justify-center items-center"
        >
          <Image
            source={restaurant.img}
            alt="Food Image"
            style={{ maxWidth: 165, height: 165 }}
          />
        </TouchableOpacity>
        <View className="mt-3 flex flex-col justify-center items-start">
          <Text className="text-xl text-black font-semibold">{restaurant.name}</Text>
          <Text className="my-1 text-md text-gray-400 font-semibold">
            {restaurant.type}
          </Text>
          <View
            className="mt-2 flex flex-row justify-between items-center"
            style={{ maxWidth: "100%", width: "100%" }}
          >
            <Text className="text-xl text-black font-semibold">
              ${restaurant.price}
            </Text>
            <Icon
              name={restaurant.isFavourite == true ? "heart" : "heart-outline"}
              size={22}
              color={restaurant.isFavourite == true ? "orangered" : "gray"}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ));
};

export default RestaurantCard;
