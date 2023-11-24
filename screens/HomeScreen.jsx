import { useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";
import FavouriteRestaurants from "../components/FavouriteRestaurants";
import FeaturedRestaurant from "../components/FeaturedRestaurant";
import FoodTypes from "../components/FoodTypes";
import Header from "../components/Header";
import Menu from "../Modals/Menu";
import SearchAndFilterBar from "../components/SearchAndFilterBar";

export default function HomeScreen() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View
      className="bg-white relative p-4 flex flex-1 justify-start items-center"
      style={{ backgroundColor: "#FFFFFF", position: 'relative', }}
    >
      <View>
     {/*  <StatusBar style= "dark" /> */}
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SearchAndFilterBar />
        <FoodTypes />
        <ScrollView style={{ marginBottom: menuOpen == true ? 65 : 0 }}>
        <FavouriteRestaurants />

        {/** featured */}

        {[1].map((index) => (
        <FeaturedRestaurant key={index}/>
      ))}
          
        </ScrollView>
      </View>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </View>
  );
}
