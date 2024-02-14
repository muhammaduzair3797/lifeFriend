import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../Constant'

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(() => {
            navigation.navigate('Signin')
        },3000)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LIFEFRIEND</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.COLOR_PRIMARY,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color:colors.COLOR_LIGHT,
        fontSize:42,
        fontFamily:'Heavitas'
    }

})

export default SplashScreen;