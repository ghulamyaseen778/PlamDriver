import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import Button from '../../Components/Global/Button';

const OrderDetails = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          paddingHorizontal: 20,
          marginVertical: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="chevron-small-left" size={25} color="#0C1E36" />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            color: '#0C1E36',
            marginLeft: -20,
          }}>
          Order Details
        </Text>
        <View></View>
      </View>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: '#F5F5F5',
              borderRadius: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 40,
                  backgroundColor: '#0C1E36',
                }}>
                <IconF name="check-circle" size={35} color="white" />
              </View>
              <View style={{marginLeft: 6}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontWeight: '600',
                    color: '#58595B',
                    fontSize: 16,
                  }}>
                  Order ID: #1249
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    color: '#939598',
                  }}>
                  Master Card
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    color: '#939598',
                  }}>
                  19-06-2023 at 01:09 am
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 20,
                  // fontFamily: 'Poppins-SemiBold',
                  fontWeight: '600',
                  color: '#FECC12',
                }}>
                $20.55
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  // fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: '#939598',
                }}>
                04 Items
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: '#0C1E36',
              marginVertical: 10,
            }}>
            Pickup Location
          </Text>
          <View
            style={{
              width: '100%',
              padding: 14,
              borderRadius: 10,
              backgroundColor: '#0C1E36',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // marginTop:20
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../assest/Image/martLogo.png')} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                  SM Mart
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    width: 150,
                    // backgroundColor:"red"
                  }}>
                  V4W4+4PHnear Habib Metrol
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={require('../../../assest/Image/phone.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 5}}>
                <Image source={require('../../../assest/Image/direction1.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: '#0C1E36',
              marginVertical: 10,
            }}>
            Customer
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 10,
              elevation: 4,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Poppins-Regular',
                      fontWeight: '400',
                      color: '#FECC12',
                    }}>
                    Customer Name:{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Poppins-Regular',
                      fontWeight: '400',
                      color: '#58595B',
                    }}>
                    Robert Fox
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Poppins-Regular',
                      fontWeight: '400',
                      color: '#FECC12',
                    }}>
                    Phone:{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Poppins-Regular',
                      fontWeight: '400',
                      color: '#58595B',
                    }}>
                    346-1341314646
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={require('../../../assest/Image/phone.png')} />
              </TouchableOpacity>
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
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-SemiBold',
                    color: '#FECC12',
                    fontWeight: '600',
                  }}>
                  Drop Off Address
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    color: '#58595B',
                    fontWeight: '400',
                  }}>
                  3055 Olin Ave #1000 San Jose, California
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={require('../../../assest/Image/direction2.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: '#0C1E36',
              marginVertical: 10,
            }}>
            Orders List
          </Text>
          <View
            style={{
              marginVertical: 5,
              width: '100%',
              padding: 10,
              backgroundColor: 'white',
              elevation: 4,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#0C1E36',
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 15,
                      backgroundColor: '#FECC12',
                    }}></View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Poppins-SemiBold',
                    marginLeft: 5,
                    color: '#0C1E36',
                  }}>
                  Pineapple
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#58595B',
                }}>
                Quantity: 02kg
              </Text>
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#0C1E36',
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 15,
                      backgroundColor: '#FECC12',
                    }}></View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Poppins-SemiBold',
                    marginLeft: 5,
                    color: '#0C1E36',
                  }}>
                  Pineapple
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#58595B',
                }}>
                Quantity: 02kg
              </Text>
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#0C1E36',
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 15,
                      backgroundColor: '#FECC12',
                    }}></View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Poppins-SemiBold',
                    marginLeft: 5,
                    color: '#0C1E36',
                  }}>
                  Pineapple
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#58595B',
                }}>
                Quantity: 02kg
              </Text>
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#0C1E36',
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 15,
                      backgroundColor: '#FECC12',
                    }}></View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: 'Poppins-SemiBold',
                    marginLeft: 5,
                    color: '#0C1E36',
                  }}>
                  Pineapple
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#58595B',
                }}>
                Quantity: 02kg
              </Text>
            </View>
          </View>
          <View style={{marginVertical:10}}>
          <Button text="Continue" type="normal" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
