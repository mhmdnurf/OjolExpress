import React, {useState} from 'react';
import StatusBar from '../../../../components/common/StatusBar';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageSourcePropType,
  Pressable,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigationType';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  image: ImageSourcePropType;
};

type FoodDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FoodDetail'
>;

interface FoodDetailProps {
  navigation: FoodDetailNavigationProp;
  route: {
    params: {
      merchantName: string;
    };
  };
}

export default function FoodDetail({navigation, route}: FoodDetailProps) {
  // const {merchantName} = route.params;
  const merchantName = route.params?.merchantName || 'Samanko';
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showCartDetail, setShowCartDetail] = useState(false); // Modal untuk detail cart
  const [cartItems, setCartItems] = useState<
    {item: MenuItem; quantity: number}[]
  >([]);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowStickyHeader(scrollY > 200);
  };

  const addItemToCart = (item: MenuItem) => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.item.id === item.id,
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, {item, quantity: 1}]);
    }
  };

  const removeItemFromCart = (itemId: string) => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.item.id === itemId,
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity > 1) {
        updatedCartItems[existingItemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const getItemQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const price = parseInt(
        cartItem.item.price.replace('Rp ', '').replace('.', ''),
        10,
      );
      return total + price * cartItem.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  // Dummy data untuk menu
  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Kopi Susu',
      description: 'Kopi arabica premium dengan susu segar',
      price: 'Rp 25.000',
      rating: '4.8',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'Espresso dengan foam susu yang creamy',
      price: 'Rp 30.000',
      rating: '4.9',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
    {
      id: '3',
      name: 'Latte',
      description: 'Espresso dengan steamed milk yang smooth',
      price: 'Rp 28.000',
      rating: '4.7',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
    {
      id: '4',
      name: 'Americano',
      description: 'Espresso dengan air panas, rasa kopi murni',
      price: 'Rp 22.000',
      rating: '4.6',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
    {
      id: '5',
      name: 'Macchiato',
      description: 'Espresso dengan sedikit steamed milk',
      price: 'Rp 32.000',
      rating: '4.8',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
    {
      id: '6',
      name: 'Mocha',
      description: 'Espresso dengan cokelat dan steamed milk',
      price: 'Rp 35.000',
      rating: '4.9',
      image: require('../../../../assets/images/coffee/coffee-promo.png'),
    },
  ];

  const renderMenuItem = ({item}: {item: MenuItem}) => {
    const quantity = getItemQuantity(item.id);

    return (
      <View className="flex-row items-center bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-4">
        <View className="flex-1">
          <Text className="text-xl font-semibold text-red-600">
            {item.name}
          </Text>
          <Text className="text-gray-500 text-sm mt-1">{item.description}</Text>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-lg font-bold text-black">{item.price}</Text>
          </View>
        </View>
        <View className="relative w-36 h-36 bg-red-600/10 rounded-2xl ml-4 items-center justify-center">
          <Image source={item.image} className="w-32 h-32" resizeMode="cover" />

          {/* Quantity Controls atau Tombol Tambah */}
          {quantity > 0 ? (
            <View className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full flex-row items-center shadow-lg border border-red-600">
              <TouchableOpacity
                onPress={() => removeItemFromCart(item.id)}
                className="w-8 h-8 items-center justify-center">
                <Icon name="remove" size={16} color="#dc2626" />
              </TouchableOpacity>
              <Text className="mx-3 text-red-600 font-bold text-sm">
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => addItemToCart(item)}
                className="w-8 h-8 items-center justify-center">
                <Icon name="add" size={16} color="#dc2626" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => addItemToCart(item)}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-4 py-2 items-center justify-center shadow-lg border border-red-600">
              <Text className="text-red-600 font-bold text-xs">Tambah</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />

      {/* Sticky Header */}
      {showStickyHeader && (
        <>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <View className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 py-4 pt-16 flex-row items-center">
            <Pressable
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-full items-center justify-center mr-4">
              <Icon name="chevron-back" size={24} color="#000" />
            </Pressable>
            <Text className="text-xl font-semibold">{merchantName}</Text>

            {/* Action Buttons for Sticky Header */}
            <View className="flex-row ml-auto">
              <Pressable className="w-10 h-10 mr-3 rounded-full items-center justify-center">
                <Icon name="heart-outline" size={20} color="#000" />
              </Pressable>
              <Pressable className="w-10 h-10 rounded-full items-center justify-center">
                <Icon name="share-outline" size={20} color="#000" />
              </Pressable>
            </View>
          </View>
        </>
      )}

      <ScrollView
        className="flex-1 bg-white"
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {/* Header Image */}
        <View className="relative">
          <Image
            source={require('../../../../assets/images/merchants/samanko.png')}
            className="w-full h-64"
          />

          {/* Back Button */}
          <Pressable
            onPress={() => navigation.goBack()}
            className="absolute top-20 left-8 w-14 h-14 border border-gray-300 bg-white rounded-full items-center justify-center">
            <Icon name="chevron-back" size={20} color="#000" />
          </Pressable>

          {/* Action Buttons */}
          <View className="absolute top-20 right-8 flex-row">
            <Pressable className="w-14 h-14 mr-4 bg-slate-50 border border-gray-300 rounded-full items-center justify-center">
              <Icon name="heart-outline" size={20} color="#000" />
            </Pressable>
            <Pressable className="w-14 h-14 bg-slate-50 border border-gray-300 rounded-full items-center justify-center">
              <Icon name="share-outline" size={20} color="#000" />
            </Pressable>
          </View>

          {/* Merchant Logo */}
          <View className="w-28 h-28 absolute -bottom-14 left-8 rounded-full bg-slate-50 border-[6px] border-white overflow-hidden shadow-lg">
            <Image
              source={require('../../../../assets/images/merchant-logo/samanko-logo.png')}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Content Section */}
        <View className="mt-20 px-6">
          <Text className="text-4xl font-semibold">{merchantName}</Text>

          {/* Location and Rating */}
          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center">
              <Icon name="location-outline" size={16} color="#FF6B6B" />
              <Text className="text-gray-500 ml-1">Jalan Merdeka</Text>
            </View>
            <View className="flex-row items-center">
              <Icon name="star" size={16} color="#FFD700" />
              <Text className="text-gray-500 ml-1">4.8 (2,729+ ratings)</Text>
            </View>
          </View>

          {/* Delivery Info */}
          <View className="mt-6 flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-semibold">30 - 40 menit</Text>
              <Text className="text-gray-500 mt-1">Waktu pengiriman</Text>
            </View>
            <View className="items-end">
              <Text className="text-xl font-semibold">10.58 km</Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-gray-500">Jarak</Text>
                <Icon
                  name="information-circle-outline"
                  size={16}
                  color="#gray-500"
                  className="ml-1"
                />
              </View>
            </View>
          </View>

          {/* Promo Card */}
          <View className="mt-8 bg-red-600/5 rounded-xl p-6 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-800 mb-2">
                Promo Spesial
              </Text>
              <Text className="text-gray-600 mb-4 leading-5">
                Free extra shot setiap pembelian kopi americano. Tersedia hanya
                hari ini!
              </Text>
              <TouchableOpacity className="bg-red-600 rounded-full px-6 py-3 self-start">
                <Text className="text-white font-semibold">
                  Pelajari lebih lanjut
                </Text>
              </TouchableOpacity>
            </View>
            <View className="ml-4">
              <Image
                source={require('../../../../assets/images/coffee/coffee-promo.png')}
                className="w-32 h-32"
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Menu Items */}
          <View className="mt-8 pb-32">
            <Text className="text-2xl font-semibold mb-4">Daftar Menu</Text>
            <FlatList
              data={menuItems}
              renderItem={renderMenuItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>

      {/* Cart Bottom Bar - Tahap 1: Quick Add Items */}
      {cartItems.length > 0 && (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-8">
          <TouchableOpacity
            onPress={() => setShowCartDetail(true)}
            className="bg-red-600 rounded-xl px-6 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-white rounded-full w-8 h-8 items-center justify-center mr-3">
                <Icon name="bag" size={16} color="#dc2626" />
              </View>
              <View>
                <Text className="text-white font-semibold">
                  {getTotalItems()} item
                </Text>
                <Text className="text-white/80 text-sm">
                  Rp {getTotalPrice().toLocaleString()}
                </Text>
              </View>
            </View>
            <Text className="text-white font-semibold">Lihat</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Cart Detail Modal - Tahap 2: Detail & Checkout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCartDetail}
        onRequestClose={() => setShowCartDetail(false)}>
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6 max-h-96">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-semibold">Keranjang Belanja</Text>
              <TouchableOpacity onPress={() => setShowCartDetail(false)}>
                <Icon name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Cart Items List */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {cartItems.map((cartItem, index) => (
                <View
                  key={index}
                  className="flex-row items-center py-3 border-b border-gray-100">
                  <Image
                    source={cartItem.item.image}
                    className="w-12 h-12 rounded-lg mr-3"
                    resizeMode="cover"
                  />
                  <View className="flex-1">
                    <Text className="font-semibold">{cartItem.item.name}</Text>
                    <Text className="text-red-600 font-bold">
                      {cartItem.item.price}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <TouchableOpacity
                      onPress={() => removeItemFromCart(cartItem.item.id)}
                      className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
                      <Icon name="remove" size={16} color="#666" />
                    </TouchableOpacity>
                    <Text className="mx-4 font-semibold">
                      {cartItem.quantity}
                    </Text>
                    <TouchableOpacity
                      onPress={() => addItemToCart(cartItem.item)}
                      className="w-8 h-8 bg-red-600 rounded-full items-center justify-center">
                      <Icon name="add" size={16} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Total & Checkout */}
            <View className="mt-4 pt-4 border-t border-gray-200">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-semibold">Total</Text>
                <Text className="text-xl font-bold text-red-600">
                  Rp {getTotalPrice().toLocaleString()}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShowCartDetail(false);
                  // Navigate to order detail/checkout page
                  // navigation.navigate('OrderDetail', { cartItems });
                }}
                className="bg-red-600 rounded-xl py-4">
                <Text className="text-white text-center font-semibold text-lg">
                  Lanjut ke Pembayaran
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
