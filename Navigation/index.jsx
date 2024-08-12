import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/Modules/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native"
import History from '../src/Modules/History';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  const navigation = useNavigation()
  const [selectedTab, setSelectedTab] = useState(2);
  const [tabs, settabs] = useState([
    {
      id: 1,
      name: 'History',
      Icon: 'earth',
      route:"HISTORY"
    },
    {
      id: 2,
      name: 'Home',
      Icon: 'home',
      route:"HOME"
    },
    {
      id: 3,
      name: 'Profile',
      Icon: 'user',
    },
  ]);
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: 'absolute',
          bottom: 0,
          elevation: 5,
          zIndex: 2,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {tabs.map(item => {
          return (
            <TouchableOpacity
            key={item.name}
            style={{alignItems:"center"}}
              onPress={() => {
                setSelectedTab(item.id);
                item.route&&navigation.navigate(item.route)
              }}>
              <View>
                <Icon
                  name={item.Icon}
                  size={25}
                  color={item.id == selectedTab ? '#FECC12' : '#808285'}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: item.id == selectedTab ? '#FECC12' : '#808285',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="HISTORY" component={History} />
      </Tab.Navigator>
    </>
  );
};

export default TabContainer;

const styles = StyleSheet.create({});
