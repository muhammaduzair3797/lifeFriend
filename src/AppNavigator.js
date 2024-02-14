import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen';
import SigninScreen from './screens/SigninScreen';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsConditions from './screens/TermsConditions';
import { colors } from './Constant';
import ForgotPassword from './screens/ForgotPassword';
import ForgotPassword1 from './screens/ForgotPassword1';
import ForgotPassword2 from './screens/ForgotPassword2';
import ForgotPassword3 from './screens/ForgotPassword3';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash Screen' component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name='Signin' component={SigninScreen} options={{headerShown:false}} />
            <Stack.Screen name='Privacy Policy' component={PrivacyPolicy} options={{headerShown:true,
            headerStyle: {backgroundColor:colors.COLOR_PRIMARY},headerTintColor:colors.COLOR_LIGHT, headerTitleStyle: {
                fontSize:26,fontWeight:'600',lineHeight:35.41,position:'relative',left:35
            }}} />
            <Stack.Screen name='Terms & Conditions' component={TermsConditions} options={{headerShown:true,
             headerStyle: {backgroundColor:colors.COLOR_PRIMARY},headerTintColor:colors.COLOR_LIGHT, headerTitleStyle: {
                fontSize:26,fontWeight:'600',lineHeight:35.41,position:'relative',left:5
            }}} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}} />
            <Stack.Screen name='ForgotPassword1' component={ForgotPassword1} options={{headerShown:false}} />
            <Stack.Screen name='ForgotPassword2' component={ForgotPassword2} options={{headerShown:false}} />
            <Stack.Screen name='ForgotPassword3' component={ForgotPassword3} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;