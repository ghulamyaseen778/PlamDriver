import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {STYLES} from '../../../Constant/Style';
import {Color} from '../../../Constant/Color';
import {height, width} from '../../../Constant/Dimension';
import {useNavigation} from "@react-navigation/native"

const SplashScreen = () => {
  const [visableLogo,setVisableLogo] = useState(false)
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      setVisableLogo(true)
    },1000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace("ON_BOARDING")
    },3000)
  },[])
  return (
    <View style={[STYLES.container, {backgroundColor: Color.mainColor}]}>
      {/* <StatusBar backgroundColor={Color.mainColor} /> */}
      <Image
        style={{width: width, height: height,opacity:0.4}}
        // resizeMode="stretch"
        source={require('../../../assest/Image/maks.png')}
      />
      <View style={[{position: 'absolute',zIndex:10}, STYLES.container]}>
        <View
          style={[
            STYLES.container,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          {visableLogo&&<Image source={require('../../../assest/Image/logo.png')} />}
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
