import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import {Color} from '../../../Constant/Color';
import Icon from 'react-native-vector-icons/Feather';
import {width} from '../../../Constant/Dimension';
import Button from '../../Components/Global/Button';
import { useNavigation } from '@react-navigation/native';

const CompleteProfile = () => {
  const [gender, setGender] = useState(true);
  const [genderValues, setGenderValues] = useState([
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ]);
  const [genderValue, setGenderValue] = useState(null);
  const [country, setCountry] = useState(true);
  const [countryValues, setCountryValues] = useState([
    {
      label: 'Pakistan',
      value: 'pakistan',
    },
  ]);
  const [countryValue, setCountryValue] = useState(null);
  const [City, setCity] = useState(true);
  const [CityValues, setCityValues] = useState([
    {
      label: 'Karachi',
      value: 'karachi',
    },
    {
      label: 'Lahore',
      value: 'lahore',
    },
  ]);
  const [CityValue, setCityValue] = useState(null);
  const navigation = useNavigation()
  return (
    <ScrollView
      style={[STYLES.container2, {paddingVertical: 20}]}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 22,
          color: Color.mainColor,
          fontWeight: '600',
          fontFamily: 'Poppins-SemiBold',
          textAlign: 'center',
        }}>
        Complete Your Profile
      </Text>
      <TouchableOpacity
        style={{
          width: 110,
          height: 110,
          backgroundColor: '#F5F5F5',
          borderRadius: 60,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Image
          style={{width: 50, height: 50}}
          resizeMode="contain"
          source={require('../../../assest/Image/image_temp.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: Color.mainColor,
          fontWeight: '600',
          fontFamily: 'Poppins-SemiBold',
          textAlign: 'center',
          marginTop: 5,
        }}>
        Upload Profile Picture
      </Text>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <View style={{position: 'relative', marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setGender(!gender);
            }}
            style={{
              width: '100%',
              height: 50,
              borderColor: '#B3B3B3',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#939598',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                marginTop: 5,
              }}>
              {genderValue ? genderValue : 'Select Gender'}
            </Text>
            {gender ? (
              <Icon name="chevron-down" color="#4D4D4D" size={20} />
            ) : (
              <Icon name="chevron-up" color="#4D4D4D" size={20} />
            )}
          </TouchableOpacity>
          {!gender && (
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginTop: 5,
                elevation: 4,
                marginVertical: 5,
              }}>
              {genderValues.map(({label}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setGenderValue(label);
                      setGender(!gender);
                    }}>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <View style={{position: 'relative', marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setCountry(!country);
            }}
            style={{
              width: '100%',
              height: 50,
              borderColor: '#B3B3B3',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#939598',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                marginTop: 5,
              }}>
              {countryValue ? countryValue : 'Country'}
            </Text>
            {country ? (
              <Icon name="chevron-down" color="#4D4D4D" size={20} />
            ) : (
              <Icon name="chevron-up" color="#4D4D4D" size={20} />
            )}
          </TouchableOpacity>
          {!country && (
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginTop: 5,
                elevation: 4,
                marginVertical: 5,
              }}>
              {countryValues.map(({label}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCountryValue(label);
                      setCountry(!country);
                    }}>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <View style={{position: 'relative', marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setCity(!City);
            }}
            style={{
              width: '100%',
              height: 50,
              borderColor: '#B3B3B3',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#939598',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                marginTop: 5,
              }}>
              {CityValue ? CityValue : 'City'}
            </Text>
            {country ? (
              <Icon name="chevron-down" color="#4D4D4D" size={20} />
            ) : (
              <Icon name="chevron-up" color="#4D4D4D" size={20} />
            )}
          </TouchableOpacity>
          {!City && (
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginTop: 5,
                elevation: 4,
                marginVertical: 5,
              }}>
              {CityValues.map(({label}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCityValue(label);
                      setCity(!City);
                    }}>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderColor: '#B3B3B3',
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          placeholder="Address"
        />
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderColor: '#B3B3B3',
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          keyboardType="number-pad"
          placeholder="National Identity Number"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#939598',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
              width: '70%',
            }}>
            Please upload your national identity number
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Color.yellowColor,
              width: 90,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: Color.yellowColor,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
              }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderColor: '#B3B3B3',
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          placeholder="Licence Number "
          keyboardType="number-pad"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#939598',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
              width: '70%',
            }}>
            Please upload your driving Licence
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Color.yellowColor,
              width: 90,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: Color.yellowColor,
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
              }}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 40}}>
          <Button text="Continue" type="normal" onPress={()=>navigation.navigate("TAB")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({});
