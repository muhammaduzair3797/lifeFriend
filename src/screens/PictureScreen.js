import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { colors } from '../Constant'
import { useNavigation } from '@react-navigation/native'

const PictureScreen = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Settings');
    };
    const handleContinue = () => {
        Alert.alert('Profile Picture Changed')
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../assets/images/back1.png')} style={{ width: 20, height: 20, position: 'relative', right: 95, top: 8 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 26, fontWeight: '600', marginRight: 10 }}>Picture</Text>
            </View>
            <TouchableOpacity style={styles.imageContainer}>
                {
                    <View style={styles.placeholderContainer}>
                        <Image source={require('../assets/images/girluser.png')} />
                    </View>
                }
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.COLOR_PRIMARY
    },
    imageContainer: {
        borderRadius: 150, // Half of the desired width and height for a circle
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 10,
        position:'relative',
        bottom:120
    },
    continueButton: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginBottom:60
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

})

export default PictureScreen