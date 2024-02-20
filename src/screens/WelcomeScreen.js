import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { colors } from '../Constant';


const WelcomeScreen = ({navigation}) => {
    const [imagePath, setImagePath] = useState('');
    const [userName, setUserName] = useState('Lisa');

    // const pickImage = async () => {
    // {    try{
    //      const image = await ImagePicker.openPicker({
    //             width: 300,
    //             height: 400,
    //             cropping: true,
    //           })
    //           console.log(image,'line16')
    //     }catch(error){
    //         console.log(error[0], 'line18')
    //     }}
    // try{
    //     const image = await ImagePicker.openCamera({
    //            width: 300,
    //            height: 400,
    //            cropping: true,
    //          })
    //          console.log(image,'line16')
    //    }catch(error){
    //        console.log(error, 'line18')
    //    }
    //   };
    const handleContinue = () => {
        navigation.navigate('HomeScreen');
      };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}>
                {
                    <View style={styles.placeholderContainer}>
                        <Image source={require('../assets/images/girluser.png')} />
                    </View>
                }
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 24, fontWeight: '600', marginRight: 50 }}> {userName} </Text>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 24 }}> 4835 </Text>
            </View>
            <View>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 30, fontWeight: '400', marginTop:30,marginBottom:20 }}>Welcome</Text>
            </View>
            <View>
                <Text style={{
                    paddingHorizontal: 65, fontSize: 16, color: colors.COLOR_LIGHT, lineHeight: 21.79,
                    textAlign: 'center', letterSpacing: 1,
                }}>
                    We are honored that you will be helping us in our goal of improving people’s mental health
                </Text>
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.COLOR_PRIMARY
    },
    imageContainer: {
        borderRadius: 150, // Half of the desired width and height for a circle
        overflow: 'hidden',
        marginTop: 80,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 10
    },
    selectedImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    placeholderImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        // Adjust other styling properties as needed
    },
    continueButton: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginTop:125
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});


export default WelcomeScreen;