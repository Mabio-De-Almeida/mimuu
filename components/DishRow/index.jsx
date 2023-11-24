import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

export default function DishRow({ pratos }) {
  return (
    <View>
      {pratos.map((prato, index) => (
        <View
          key={index}
          className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2"
        >
          <Image
            className="rounded-3xl"
            style={{ height: 100, width: 100 }}
            source={prato.image}
          />
          <View className="flex flex-1 space-y-3">
            <View className="pl-3">
              <Text className="text-xl">{prato.name}</Text>
              <Text className="text-gray-700">{prato.description}</Text>
            </View>
            <View className="flex-row pl-3 justify-between items-center">
                        <Text className="text-gray-700 text-lg font-bold">
                            {prato.price} Kz
                        </Text>
                        <View className="flex-row items-center">
                            <TouchableOpacity 
                                /* onPress={handleDecrease}  */
                                className="p-1 rounded-full" 
                                style={{backgroundColor: '#b16d1e'}}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                            <Text className="px-3">
                            {0}
                            </Text>
                            <TouchableOpacity 
                               /*  onPress={handleIncrease} */ 
                                className="p-1 rounded-full" 
                                style={{backgroundColor: '#ecc42e',}}>
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                        </View>
          </View>
        </View>
      ))}
    </View>
  );
}
