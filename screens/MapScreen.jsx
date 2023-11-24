import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, {Marker} from 'react-native-maps'
import data from '../components/FeaturedRestaurant/RestaurantCard/data'
import { Image } from 'react-native'
import restaurantImage from '../assets/images/restaurant/restaurante01.jpg'
import { TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather';


export default function MapScreen() {
    const restaurant = data[0];
    const navigation = useNavigation();
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        initialRegion={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType='standard'
        >
            <Marker
                coordinate={{
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude,
                }}
                title={restaurant.name}
                description={restaurant.description}
                pinColor='#FEBD2E'
                />
      </MapView>
      <View className ="rounded-t-3xl -mt-12 bg-white relative" 
     
      >
         {/* style={{backgroundColor: 'rgba(254, 189, 46, 0.2)',}} */}
        <View className="flex-row justify-between py-12 px-5 pt-18">
            <View>
                <Text className="text-lg text-gray-700 font-semibold text-3xl">
                    {restaurant.name}
                </Text>

                <Text>Quantidade de Avaliações · </Text>
              <Text>Reviews 8.9k</Text> 
                <Text style={{ color: 'gray', marginTop: 16,  }}>Desfrute de uma experiência culinária única que combina ingredientes frescos, técnicas inovadoras e sabores autênticos.</Text> 
            </View>
        </View>
        <View
        style={{backgroundColor: '#FEBD2E'}}
        className="p-1 flex-row justify-between items-center rounded-full my-2 mx-2">

            <View className="p-1 rounded-full"
            style={{backgroundColor: 'rgba(254, 189, 46, 0.4)'}}>
                <Image className="h-16 w-16 rounded-full"
                source={restaurantImage}/>
                
</View>
            <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-black">
                    Apoio ao Cliente
                </Text>
                <Text className="font-semibold text-black">
                    Gerente
                </Text>
            </View>
            <View className="flex-row item-center space-x-3 mr-3">
                <TouchableOpacity className="bg-white p-2 rounded-full">
                    <Icon.Phone fill='#b16d1e' strokeWidth={1} stroke="#b16d1e" />

                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}className="bg-white p-2 rounded-full">
                    <Icon.X strokeWidth={4} stroke="red" />

                </TouchableOpacity>

            </View>


        </View>
        
      </View>
    </View>
  )
}