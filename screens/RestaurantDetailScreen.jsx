import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StarIcon from "react-native-vector-icons/AntDesign";
import * as Icon from 'react-native-feather';
import DishRow from '../components/DishRow';
import image1 from '../assets/images/restaurant/restaurante01.jpg';
import CartIcon from '../Modals/CartIcon';
// import { setRestaurant } from '../slices/restaurantSlices';
// import { useDispatch } from 'react-redux';



export default function RestaurantDetailScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let restaurant = params;
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(restaurant && restaurant.id){
  //     dispatch(setRestaurant({...restaurant}))
  //   }
  // }, [])

  const onPressNavigateToMap = () => {
    // Navegue para a tela do mapa ou a tela desejada
    navigation.navigate('Map');
  };

  return (
    
    <View className="flex-1 bg-gray" style={{flex: 1}}>
      <CartIcon/>

     
        <StatusBar style= "light"/>

        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
        <Image
          source={restaurant.img}
          style={{
            width: '100%',
            height: 288, // Adjust the height as needed
          }}
        />

<TouchableOpacity 
    onPress={() => navigation.goBack()} 
    className="absolute top-14 left-4 bg-yellow p-1 rounded-full shadow"
    style={{backgroundColor:'#ecc42e'}}>
    <Icon.ArrowLeft strokeWidth={3} color="#b16d1e" />
</TouchableOpacity>


        {/** */}

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: 'white',
            marginTop: -100,// can change
            paddingTop: 24,// ajustar 
            height: '100%',
          }}
        >

          <View style={{ paddingHorizontal: 20 }}>

            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{restaurant.name}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <StarIcon name="star" size={14} color="#FEBD2E" />
              <Text style={{ fontSize: 12 }}>
              <Text style={styles.greenText}> Quantidade de Avaliações · </Text>
              <Text style={styles.grayText}>Reviews </Text> 8.9k
              </Text>
            </View>

            <TouchableOpacity onPress={onPressNavigateToMap}>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          <Icon.MapPin color="gray" width={15} height={15} /> Proximo de si · Endereço
        </Text>
      </View>
    </TouchableOpacity>

           <Text style={{ color: 'gray', marginTop: 16,  }}>Desfrute de uma experiência culinária única que combina ingredientes frescos, técnicas inovadoras e sabores autênticos.</Text> 
          </View>  

          {/** box de imagens */}
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly', marginBottom: 20 }}>
          
          <View style={styles.imageContainer}>
            <Image source={restaurant.image1} style={styles.image} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={image1} style={styles.image} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={image1} style={styles.image} />
          </View>

          </View>

          {/**end of box */}

          <View style={{ paddingBottom: 72, backgroundColor: 'white' }}>
          <Text style={{ paddingHorizontal: 16, paddingVertical: 16, fontSize: 24, fontWeight: 'bold', color: '#b16d1e'}}>Menu</Text>

          {/* pratos/ dishes  */}
         {
          <DishRow pratos={restaurant.pratos} />

         }
          {/** end of dishes  */}
        </View>

        
        {/** */}

        </View>
        
        </ScrollView>
      
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity and color as needed
    borderRadius: 20, // Adjust the border radius as needed
  },
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    paddingTop: 46,
  },

  // imagens do restaurante

  imageContainer: {
    width: '30%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
