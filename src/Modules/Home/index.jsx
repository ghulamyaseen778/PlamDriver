import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
import OrderCard from '../../Components/OrderCard';

const Home = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 20,
        }}>
        <View></View>
        <Image
          style={{marginLeft: 30}}
          source={require('../../../assest/Image/logo3.png')}
        />
        <TouchableOpacity>
          <Icon name="notifications-outline" size={30} color="#0C1E36" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginVertical: 10}}>
        <View
          style={{
            width: '100%',
            height: 60,
            borderColor: '#B3B3B3',
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{height: '100%', width: '90%'}}
            placeholder="Search Order ID"
          />
          <TouchableOpacity>
            <IconA name="search1" size={25} color="#0C1E36" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#0C1E36', fontWeight: '600', fontSize: 18}}>
            Orders
          </Text>
          <Text style={{color: '#FECC12', fontWeight: '600', fontSize: 14}}>
            Today
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginBottom: 80,
          width: '100%',
          paddingHorizontal: 20,
        }}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
