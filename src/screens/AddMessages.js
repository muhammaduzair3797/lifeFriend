import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image,} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../Constant'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@MyMessages:key';

const AddMessages = ({route}) => {
    const navigation = useNavigation();
    const [newMessage, setNewMessage] = useState('');
    const addMessage = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([newMessage]));
          navigation.navigate('YourMessage');
        } catch (error) {
          console.error('Error saving message:', error);
        }
      };
    const handleBack = () => {
        navigation.navigate('Settings');
    };

    return (
        <View style={styles.container}>
             <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../assets/images/back1.png')} style={{ width: 20, height: 20, position: 'relative', right: 75, top: 8 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 26, fontWeight: '600' }}>Add Message</Text>
            </View>
            <Text style={styles.header}>Fill in your own message</Text>
            <TextInput
                style={styles.input}
                placeholder="Type Here"
                value={newMessage}
                textAlignVertical='top'
                onChangeText={(text) => setNewMessage(text)}
                multiline
                
            />
            <TouchableOpacity style={styles.continueButton} onPress={addMessage}>
                <Text style={styles.continueButtonText}>Done</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:colors.COLOR_PRIMARY
    },
    header: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
        marginTop:40,
        color:colors.COLOR_LIGHT
      },
      input: {
        borderWidth: 1,
        width:327,
        height:130,
        backgroundColor:colors.COLOR_LIGHT,
        borderColor: 'gray',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        position:'relative',
      },
      continueButton: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        position:'relative',
        top:340
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

})

export default AddMessages
