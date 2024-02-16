import { View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList, SectionList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Constant';


const HomeScreen = ({ navigation }) => {
    const texts = ["How's your day going? Anything exciting happening today?",
        "Not much, just the usual routine. How about yours?",
        "Just work and some errands. Any plans for tonight?",
        "Thinking of relaxing at home. Maybe watch a movie.",
        "Sounds nice. Enjoy your evening! Talk to you later.",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleContinue = () => {
        navigation.navigate('Settings');
    };

    const handlePlusClick = () => {
        const newIndex = currentIndex + 1;
        if (newIndex < texts.length) {
            setCurrentIndex(newIndex);
        }
    };

    const handleMinusClick = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        };
    }


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginTop: 50, color: colors.COLOR_LIGHT, fontWeight: '600' }}>
                LIFEFRIEND
            </Text>
            <TouchableOpacity style={styles.imageContainer}>
                {
                    <View style={styles.placeholderContainer}>
                        <Image source={require('../assets/images/girluser.png')} />
                    </View>
                }
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 24, fontWeight: '600', marginRight: 50 }}> Lisa </Text>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 24 }}> 4835 </Text>
            </View>

            <View>
                <Text style={{ color: colors.COLOR_LIGHT, marginTop: 20, fontSize: 16,paddingHorizontal: 70,textAlign:'center', marginBottom:10 }}>
                    {texts[currentIndex]}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.PlusButtons} onPress={handlePlusClick}>
                    <Text style={{ fontSize: 30, color: colors.COLOR_LIGHT, alignSelf: 'center', position: 'relative', bottom: 5 }}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MinusButtons} onPress={handleMinusClick}>
                    <Text style={{ fontSize: 30, color: colors.COLOR_LIGHT, alignSelf: 'center', position: 'relative', bottom: 5 }}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleContinue}>
                <Image source={require('../assets/images/settings.png')} style={{ position: 'relative', top: 130 }} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.COLOR_PRIMARY
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    PlusButtons: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.COLOR_LIGHT,
        marginRight: 120
    },
    MinusButtons: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.COLOR_LIGHT,
    },
    imageContainer: {
        borderRadius: 150, // Half of the desired width and height for a circle
        overflow: 'hidden',
        marginTop: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 10
    },
    placeholderImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        // Adjust other styling properties as needed
    },
    flatListContainer: {
        alignItems: 'center',
    },
    optionContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        margin: 8,
        borderRadius: 8,
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
    },
    selectedTextContainer: {
        marginTop: 20,
    },
    selectedText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
    },
});

export default HomeScreen;