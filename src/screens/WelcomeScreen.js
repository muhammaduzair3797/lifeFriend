import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { colors } from '../Constant';

const WelcomeScreen = () => {
    const [selectedImagePath, setSelectedImagePath] = useState('');
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            cropperCircleOverlay: true,
            cropperChooseText: 'Choose',
            cropperCancelText: 'Cancel',

        })
            .then(image => {
                console.log('Selected Image Path:', image.path);
                setSelectedImagePath(image.path);
            })
            .catch((error) => {
                console.log('ImagePicker Error:', error);
              });

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { choosePhotoFromLibrary() }} style={styles.imageContainer}>
                {selectedImagePath ? (
                    <Image source={{ uri: selectedImagePath.uri }} style={styles.selectedImage} />
                ) : (
                    <View style={styles.placeholderContainer}>
                        <Image source={require('../assets/images/girluser.png')} />
                    </View>
                )}
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
});


export default WelcomeScreen;