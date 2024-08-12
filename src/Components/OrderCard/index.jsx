import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const OrderCard = ({order,isComplete}) => {
  const navgation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navgation.navigate("ORDER_DETAILS")}
      activeOpacity={0.8}
      style={{
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        elevation: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          {order?isComplete?
          <Image source={require("../../../assest/Image/rigth.png")} />
          :<Image source={require("../../../assest/Image/cancel.png")} />:<></>}
        <Text
          style={{
            fontSize: 16,
            // fontFamily: 'Poppins-SemiBold',
            color: '#0C1E36',
            fontWeight: '600',
            marginLeft:order?5:0
          }}>
          Order ID: #1250
        </Text>
        </View>
        {
          !order?<TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: '#0C1E36',
          }}>
          <Text
            style={{
              fontSize: 13,
              // fontFamily: 'Poppins-SemiBold',
              color: 'white',
              fontWeight: '600',
            }}>
            Pickup order
          </Text>
        </TouchableOpacity>:
          <Text
            style={{
              fontSize: 20,
              // fontFamily: 'Poppins-SemiBold',
              color: '#FECC12',
              fontWeight: '600',
            }}>
            $10.15
          </Text>
        }
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#E9EAEC',
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FECC12'}}>
              Customer Name:
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#0C1E36'}}>
              {' '}
              Jacab Jone
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FECC12'}}>
              Phone:
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#0C1E36'}}>
              {' '}
              346-1341314646
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FECC12'}}>
              Delivery on:
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#0C1E36'}}>
              {' '}
              19-06-2023 at 01:09 am
            </Text>
          </View>
        </View>
        {
          !order&&<Icon name="chevron-small-right" size={30} color="#0C1E36" />
        }
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#E9EAEC',
          marginVertical: 10,
        }}
      />
      <Text style={{fontSize: 14, fontWeight: '500', color: '#FECC12'}}>
        Drop Off Address:
      </Text>
      <Text style={{fontSize: 14, fontWeight: '400', color: '#0C1E36'}}>
        3055 Olin Ave #1000 San Jose, California
      </Text>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
