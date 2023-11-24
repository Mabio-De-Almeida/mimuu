import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


import data from '../components/FeaturedRestaurant/RestaurantCard/data';
// import { useSelector } from 'react-redux';
// import { selectRestaurant } from '../slices/restaurantSlices';

export default function ReservationScreen() {
  // const restaurant = useSelector(selectRestaurant);
  const restaurant = data[0];
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalAndNavigate = () => {
    toggleModal();
    navigation.navigate('Order');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // Verificar se o dia selecionado não é segunda-feira (1)
    if (date.getDay() !== 1) {
      setSelectedDate(date.toISOString());
    } else {
      // Exibir uma mensagem ou lógica de tratamento para o usuário
      console.log('Não é possível selecionar segundas-feiras.');
    }

    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    // Limitar a escolha de horas entre 10 AM e 9 PM
    const selectedHour = time.getHours();
    if (selectedHour >= 10 && selectedHour <= 21) {
      setSelectedTime(time.toLocaleTimeString());
    } else {
      // Exibir uma mensagem ou lógica de tratamento para o usuário
      console.log('Por favor, selecione uma hora entre 10 AM e 9 PM.');
    }

    hideTimePicker();
  };

  const showSuccessModal = () => {
    setModalVisible(true);
  };

  const hideSuccessModal = () => {
    setModalVisible(false);
  };



  return (
    <View className="bg-white flex-1">
      {/** back button */}
    <View className="relative bg-yellow-400 py-4 shadow-sm">
      <TouchableOpacity 
    onPress={() => navigation.goBack()} 
    className="absolute z-10 top-14 left-4 bg-yellow p-1 rounded-full shadow"
    style={{backgroundColor:'#b16d1e'}}>
    <Icon.ArrowLeft strokeWidth={3} color="#ecc42e"/>
      </TouchableOpacity>
      <View>
        <Text className = "text-center font-bold text-xl mt-8">Reserve Agora</Text>
        <Text className="text-center text-gray-500">{restaurant.name}</Text>
      </View>
    </View>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom:50}}

    className="bg-white pt-5"
    >
      {
        restaurant.pratos.map((prato, index)=>{
          return(
            <View
            key= {index}
            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{color: 'gray'}}>
                2 x
              </Text>
              <Image className='h-14 w-14 rounded-full'
              source={prato.image} />
              <Text className="flex-1 font-bold text-gray-700">{prato.name}</Text>
              <Text className ="font-semibold text-base">{prato.price} Kz</Text>
            <TouchableOpacity
            className ="p-1 rounded-full"
            style={{backgroundColor: '#b16d1e'}}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke= "white" />

            </TouchableOpacity>
            </View>
          )

        })
      }

      {/* Restante do seu código... */}
      <TouchableOpacity onPress={showDatePicker}
      className="bg-brown p-4 mx-5 rounded-full mb-4"
      style={{backgroundColor: '#b16d1e'}}>
        <Text className="text-white text-center font-bold">Selecione a Data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimePicker}
       className="bg-brown p-4 mx-5 rounded-full mb-4"
       style={{backgroundColor: '#b16d1e'}}>
        <Text className="text-white text-center font-bold">Selecione a Hora</Text>
      </TouchableOpacity>

      {/* Seletor de Data */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      {/* Seletor de Hora */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
          
        {/* Seletor de Quantidade */}
        <View className="flex-row items-center justify-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
        <TouchableOpacity
          onPress={decrementQuantity}
          className='p-1  rounded-full'
          style={{backgroundColor: '#b16d1e'}}
          >
          <Icon.Minus strokeWidth={2} height={20} stroke="white" />
        </TouchableOpacity>
        <Text className='font-bold text-gray-700'>{quantity} x Pessoas </Text>
        <TouchableOpacity onPress={incrementQuantity} className='p-1 rounded-full bg-brown'
        style={{backgroundColor: '#b16d1e'}}>
          <Icon.Plus strokeWidth={2} height={20} stroke="white" />
        </TouchableOpacity>
      </View>

      {/* Caixa de Texto de Notas */}
      <View className='flex-row items-center space-x-3 py-8 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
        <Text className="font-bold text-gray-700"> Notas:</Text>
        <TextInput
          className='flex-1 height-40 border-gray-300 border-1 rounded-5'
          onChangeText={setNotes}
          value={notes}
          placeholder="Adicione observações aqui"
        />
      </View>

    </ScrollView>

    {/** totals */}
    <View style={{backgroundColor: 'rgba(254, 189, 46, 0.2)',}}
    className="p-6 px-8 rounded-t-3xl space-y-4">

      <View className="flex-row justify-between">
      <Text className = "text-gray-700"> Subtotal</Text>
      <Text className = "text-gray-700"> 20.000 kz</Text>
      </View>

      <View className="flex-row justify-between">
      <Text className = "text-gray-700"> Taxa de Reserva </Text>
      <Text className = "text-gray-700"> 5.000 kz</Text>
      </View>
      
      <View className="flex-row justify-between">
      <Text className = "font-extrabold text-gray-700"> Total </Text>
      <Text className = "font-extrabold text-gray-700"> 50.000 kz</Text>
      </View>

      <TouchableOpacity
      style={{}}
      onPress={toggleModal}
      className = "p-3 rounded-full bg-yellow-400"
      >
        <Text className= "text-brown text-center font-bold text-lg"
        >
          Confirme a reserva
        </Text>

      </TouchableOpacity>
    </View>

    
<Modal animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
  <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
    <View className="bg-yellow-400" style={{ padding: 20, borderRadius: 10, alignItems: 'center' }}>
      <Image source={require("../assets/images/happyWoman.png")} className="h-40 w-40"/>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Reservado com Sucesso</Text>
      <TouchableOpacity onPress={toggleModalAndNavigate} style={{ marginTop: 20 }}>
        <Text className="p-4 rounded font-bold " style={{backgroundColor: 'brown', color: 'white'}}>Fechar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


    </View>
  )
}