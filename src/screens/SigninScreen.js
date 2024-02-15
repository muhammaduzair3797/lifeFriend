import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { colors } from '../Constant';
import Buttons from '../components/Buttons';

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
   // console.log(email);
    const [password, setPassword] = useState('');
   // console.log(password);
   const submit = () => {
    if (email === 'abc@test.com' && password === '12345') {
        navigation.navigate('WelcomeScreen');
    } else {
        Alert.alert('User Name Or Password Is Not Correct')
    }
   }
    const goToPrivacyPolicy = () => {
        // Navigate to Privacy Policy screen
        navigation.navigate('Privacy Policy');
      };
    
      const goToTermsConditions = () => {
        // Navigate to Terms & Conditions screen
        navigation.navigate('Terms & Conditions');
      };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Sign In</Text>
            </View>

            {/* Email Address Input */}

            <Text style={{ position: 'relative', right: 102, marginBottom: 5, color: colors.COLOR_LIGHT, fontSize: 18 }}
            >Email Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor={'#808080'}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(emailaddress)=> setEmail(emailaddress)}
            />

            {/* Password Input */}
            <Text style={{ position: 'relative', right: 118, marginBottom: 5, color: colors.COLOR_LIGHT, fontSize: 18 }}
            >Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'#808080'}
                secureTextEntry= {true}
                value={password}
                onChangeText={(Passworddata)=> setPassword (Passworddata)}

            />

            {/* Forgot Password Button */}
            <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText} onPress={()=> navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} 
            onPress={()=> submit()}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Additional Text */}
            <Text style={styles.additionalText}>
                By signing in and using this app, you agree with this{' '}
                <TouchableOpacity onPress={goToPrivacyPolicy}>
                    <Text style={styles.linkText}>Privacy Policy</Text>
                </TouchableOpacity>{' '}
                and{' '}
                <TouchableOpacity onPress={goToTermsConditions}>
                    <Text style={styles.linkText}>Terms & Conditions</Text>
                </TouchableOpacity>
            </Text>




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_PRIMARY,
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    title: {
        fontSize: 28,
        fontWeight: '400',
        marginTop: 68,
        marginBottom: 50,
        color: colors.COLOR_LIGHT
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: colors.COLOR_DARK,
        backgroundColor: 'white',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 2
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 15,
    },
    forgotPasswordText: {
        color: colors.COLOR_LIGHT,
    },
    signInButton: {
        backgroundColor: colors.COLOR_DARK,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        position: 'relative',
        top: 250,
        marginBottom: 15,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    additionalText: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.COLOR_LIGHT,
        position: 'relative',
        top: 245
    },
    linkText: {
        color: colors.COLOR_LIGHT,
        textDecorationLine: 'underline',
    },
});

export default SignInScreen;
