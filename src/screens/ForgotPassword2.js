import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Constant';

const ForgotPassword2 = ({ navigation }) => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleContinue = () => {
    navigation.navigate('ForgotPassword3')
  }
  const isContinueButtonDisabled = !password || password !== confirmPassword;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>New Password</Text>
      </View>

      <View style={{ width: '100%', marginBottom: 300 }}>
        <Text style={{ color: colors.COLOR_LIGHT, fontSize: 18, fontWeight: '400', marginBottom: 2 }}>Password</Text>
        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={{ color: colors.COLOR_LIGHT, fontSize: 18, fontWeight: '400', marginBottom: 2 }}>Confirm Password</Text>
        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, isContinueButtonDisabled && styles.disabledButton]}
        onPress={handleContinue}
        disabled={isContinueButtonDisabled}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: colors.COLOR_PRIMARY,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.COLOR_LIGHT,
    fontSize: 28,
    fontWeight: '400',
    marginTop: 68
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: colors.COLOR_LIGHT
  },
  continueButton: {
    backgroundColor: colors.COLOR_DARK,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 24,
    marginBottom:50
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },


});


export default ForgotPassword2;