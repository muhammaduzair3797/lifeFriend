import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { colors } from '../Constant';

const NameScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation.navigate('Settings');
    };
    const handleContinue = () => {
        Alert.alert('Name Changed',
        navigation.navigate('Settings')
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../assets/images/back1.png')} style={{ width: 20, height: 20, position: 'relative', right: 100, top: 8 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 26, fontWeight: '600', marginRight: 10 }}>Name</Text>
            </View>
            <View style={{ width: '100%' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter New Name"
                />
            </View>
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
        backgroundColor: colors.COLOR_PRIMARY,
        alignItems: 'center',
        justifyContent:'space-between',
    },
    input: {
        width: 327,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        backgroundColor: colors.COLOR_LIGHT,
        alignSelf: 'center',
        position:'relative',
        bottom:200
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

export default NameScreen;