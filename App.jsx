import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Modules/SplashScreen';
import OnBoarding from './src/Modules/Onboarding';
import Login from './src/Modules/Registeration/Login';
import SignUp from './src/Modules/Registeration/SignUp';
import OnBoardingWelcome from './src/Modules/Onboarding/Welcome';
import ResetPassword from './src/Modules/Registeration/ResetPassword';
import OtpVerification from './src/Modules/Registeration/OtpVerification';
import ForgotPassword from './src/Modules/Registeration/ForgotPassword';
import CompleteProfile from './src/Modules/CompleteProfile';
import TabContainer from './Navigation';
import OrderDetails from './src/Modules/OrderDetails';
// import Profile from './src/Modules/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SPLASH_SCREEN">
        <Stack.Screen name="SPLASH_SCREEN" component={SplashScreen} />
        <Stack.Screen name="ON_BOARDING" component={OnBoarding} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="SIGNUP" component={SignUp} />
        <Stack.Screen name="FORGOT_PASSWORD" component={ForgotPassword} />
        <Stack.Screen name="OTP_VERIFICATION" component={OtpVerification} />
        <Stack.Screen name="RESET_PASSWORD" component={ResetPassword} />
        <Stack.Screen name="WELCOME_SCREEN" component={OnBoardingWelcome} />
        <Stack.Screen name="COMPLETE_PROFILE" component={CompleteProfile} />
        <Stack.Screen name="TAB" component={TabContainer} />
        <Stack.Screen name='ORDER_DETAILS' component={OrderDetails} />
        {/* <Stack.Screen name='PROFILE' component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
