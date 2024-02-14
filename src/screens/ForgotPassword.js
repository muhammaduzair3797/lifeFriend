import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../Constant';

const ForgotPassword = ({ navigation }) => {
    const handleContinue = () => {
        // Navigate to EmailSent screen
        navigation.navigate('EmailSent');
    };

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.title}>Forgot Password</Text>
            </View>

            <View style ={{position:'relative', bottom:200}}>
                <Text style={styles.description}>Email Address</Text>

                {/* Email Address Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={{position:'relative',bottom:50}}>
                {/* Continue Button */}
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent:'space-between',
        backgroundColor:colors.COLOR_PRIMARY
    },
    title: {
        fontSize: 28,
        fontWeight: '400',
        marginTop:30,
        color:colors.COLOR_LIGHT
    },
    description: {
        fontSize: 18,
        fontWeight:'400',
        marginBottom: 10,
        color:colors.COLOR_LIGHT
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor:colors.COLOR_LIGHT
    },
    continueButton: {
        backgroundColor: colors.COLOR_DARK,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginBottom: 15,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ForgotPassword;
