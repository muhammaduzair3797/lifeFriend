import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../Constant';
import EditNameBtn from '../components/EditNameBtn';

const SettingsScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation.navigate('HomeScreen');
    };
    const handleEditName = () => {
        navigation.navigate('NameScreen');
    };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../assets/images/back1.png')} style={{ width: 20, height: 20, position: 'relative', right: 85, top: 8 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 26, fontWeight: '600' }}>Settings</Text>
            </View>
            <View style={{marginTop: 40,marginBottom: 15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Edit Name
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom: 15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Change Picture
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom: 15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Your Message
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom: 15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Add Own Message
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Help
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30,marginBottom:45, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Give Feedback
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:15, }}>
                <TouchableOpacity style={styles.Button} onPress={handleEditName}>
                    <Text style={styles.text}>
                        Terms & Conditions
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.COLOR_PRIMARY
    },
    Button: {
        width: 327,
        backgroundColor: colors.COLOR_LIGHT,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 16,
        opacity: 0.25
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.COLOR_LIGHT,
        opacity: 1,
    }

})

export default SettingsScreen;