import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constant';
import { Svg, Circle, Path } from 'react-native-svg'



const ForgotPassword1 = ({navigation}) => {
    const handleContinue = () => {
        navigation.navigate('ForgotPassword2');
      };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 300, }}>
                <Svg width="180" height="180" viewBox="0 0 180 180" fill="none" style={{
                    alignSelf: 'center', marginTop: 100, opacity: 0.5
                }}>
                    <Circle cx="90" cy="90" r="90" fill="white" fill-opacity="0.35" />
                </Svg>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/images/check.png')} style={{
                        width: 80, height: 80, alignSelf: 'center', marginTop: 25
                    }} />
                </View>
            </View>
            <View></View>
            <Text style={{ color: colors.COLOR_LIGHT, fontSize: 24, fontWeight: '700', marginVertical: 10 }}>
                Email Sent
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', paddingHorizontal: 20, textAlign: 'center', color: colors.COLOR_LIGHT }}>
                Check your email and open the link we sent to continue
            </Text>
            
                <TouchableOpacity style={styles.continueButton}
                    onPress={handleContinue} >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.COLOR_PRIMARY,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal:20
        
    },
    circleContainer: {
        width: 130, // Set your desired width
        height: 130, // Set your desired height
        borderRadius: 65, // Half of the width and height to create a circle
        backgroundColor: 'white', // Set your desired background color
        alignSelf: 'center',
        position: 'relative',
        bottom: 155

    },
    circleContainer1: {
        width: 90, // Set your desired width
        height: 90, // Set your desired height
        borderRadius: 45, // Half of the width and height to create a circle
        backgroundColor: 'white', // Set your desired background color
        alignSelf: 'center',
        marginHorizontal: 15,
        opacity: 1
    },
    continueButton: {
        backgroundColor: colors.COLOR_DARK,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginTop:225
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
})

export default ForgotPassword1;