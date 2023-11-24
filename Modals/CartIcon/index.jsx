import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function CartIcon() {
    const navigation = useNavigation();
  return (
<View className="absolute bottom-5 left-2 right-2 rounded-full w-full z-50
20 flex ">
        <TouchableOpacity 
          style={{backgroundColor: '#FEBD2E'}}
          onPress={()=> navigation.navigate('Reserva')} 
          className="flex-row justify-between items-center mx-5 rounded-full px-4 py-2 shadow-lg">   
            <View className="p-1 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
              <Text className="font-extrabold text-white text-lg">{3}</Text>
            </View>
            
            <Text className="flex-1 text-center font-extrabold text-white text-lg">Reserva</Text>
             <Text className="font-extrabold text-white text-lg">{480} Kz</Text> 
        
        </TouchableOpacity>
      
    </View>
  )
}