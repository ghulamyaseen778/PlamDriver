import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import OrderCard from '../../Components/OrderCard';

const Tab1 = () => {
  return (
    <ScrollView
      style={{width: '100%', height: '100%', marginTop: 10, marginBottom: 80}}>
     <View style={{paddingHorizontal:20}}>
     <OrderCard order isComplete />
     <OrderCard order isComplete />
     <OrderCard order isComplete />
     <OrderCard order isComplete />
     <OrderCard order isComplete />
     </View>
    </ScrollView>
  );
};
const Tab2 = () => {
  return (
    <ScrollView
    style={{width: '100%', height: '100%', marginTop: 10, marginBottom: 80}}>
   <View style={{paddingHorizontal:20}}>
   <OrderCard order isComplete={false} />
   <OrderCard order isComplete={false} />
   <OrderCard order isComplete={false} />
   <OrderCard order isComplete={false} />
   </View>
  </ScrollView>
  );
};

const History = () => {
  const [tab, setTab] = useState(1);
  const [tabList, setTabList] = useState([
    {
      id: 1,
      name: 'Deliver',
    },
    {
      id: 2,
      name: 'Cancel',
    },
  ]);
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
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#0C1E36',
              fontSize: 18,
              // fontFamily: 'Poppins-SemiBold',
              fontWeight: '600',
            }}>
            Order History
          </Text>
          <Text
            style={{
              color: '#58595B',
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              fontWeight: '600',
            }}>
            (20)
          </Text>
        </View>
        <Icon name="notifications-outline" size={25} color="#0C1E36" />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor: '#F5F5F5',
            width: '100%',
            borderRadius: 10,
          }}>
          {tabList.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setTab(item.id)}
                key={item.id}
                style={{
                  width: '50%',
                  backgroundColor: tab == item.id ? '#0C1E36' : 'transparent',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  // elevation:10
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    // fontFamily: 'Poppins',
                    color: tab == item.id ? 'white' : '#0C1E36',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

      </View>
        {tab == 1 ? <Tab1 /> : <Tab2 />}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
