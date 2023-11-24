import { View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function OrderComplete() {

    const navigation = useNavigation();
    useEffect(() =>{
        setTimeout(()=>{
            navigation.navigate('Home');
        }, 3000)
    }, [])
  return (
    <View className= "flex-1 justify-center items-center"
    style={{backgroundColor: '#b16d1e',}}
    >
   
      <Image source={require("../assets/images/b16d1e.gif")}
      className="h-80 w-80"/>
     
    </View>
  )
}