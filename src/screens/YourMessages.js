import { View, Text, StyleSheet, TouchableOpacity, Image, Button, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@MyMessages:key';

const YourMessages = ({ route }) => {
    const navigation = useNavigation();
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedMessage, setEditedMessage] = useState('');
    const [isDeleteButtonEnabled, setIsDeleteButtonEnabled] = useState(false);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        try {
            const storedMessages = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedMessages !== null) {
                setMessage(JSON.parse(storedMessages)[0]);
            }
        } catch (error) {
            console.error('Error loading messages:', error);
        }
    };

    const deleteMessage = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setMessage('');
            setIsDeleteButtonEnabled(false);
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };
    const startEditing = () => {
        setIsEditing(true);
        setEditedMessage(message);
    };

    const saveEditedMessage = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([editedMessage]));
            setMessage(editedMessage);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving edited message:', error);
        }
    };
    const handleLongPress = () => {
        setIsDeleteButtonEnabled(true);

    };

    const handleBack = () => {
        navigation.navigate('Settings');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../assets/images/back1.png')} style={{ width: 20, height: 20, position: 'relative', right: 55, top: 8 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.COLOR_LIGHT, fontSize: 26, fontWeight: '600' }}>Your Messages</Text>
            </View>
            <View>
                {message ? (
                    <View>
                        {isEditing && !isDeleteButtonEnabled ? (
                            <View style={styles.editContainer}>
                                <TextInput
                                    style={styles.editInput}
                                    value={editedMessage}
                                    onChangeText={(text) => setEditedMessage(text)}
                                    multiline
                                />
                                <View style={styles.editButtons}>
                                    <TouchableOpacity onPress={saveEditedMessage} style={styles.editbtn}>
                                        <Text style={styles.ButtonText}>Save</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        ) : (
                            <View>
                                <View>
                                    <TouchableOpacity onLongPress={() => {
                                        handleLongPress();
                                    }} onPress={() => setIsDeleteButtonEnabled(true)}>
                                        <Text style={styles.message}>{message}</Text>
                                    </TouchableOpacity>
                                    {isDeleteButtonEnabled && (
                                        <TouchableOpacity onPress={deleteMessage} style={styles.deletebtn}>
                                            <Image source={require('../assets/images/delete.png')} style={{position:'relative',left:105,top:3}}/>
                                            <Text style={styles.deletebtntxt}>Delete</Text>                                          
                                        </TouchableOpacity>
                                    )}
                                    <View style={{width:327}}>
                                        {isDeleteButtonEnabled || (

                                            <TouchableOpacity onPress={startEditing} style={styles.Button}>
                                                <Text style={styles.btntext}>Edit</Text>
                                            </TouchableOpacity>
                                        )}

                                    </View>

                                </View>



                            </View>
                        )}
                    </View>
                ) : (
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/images/Mask.png')} style={{ position: 'relative', top: 50 }} />
                        <Text style={styles.text}>
                            Your message collection is currently empty. By adding messages on the home screen or by adding your own messages in the settings menu, you can fill your message collection
                        </Text>
                    </View>
                )}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.COLOR_PRIMARY
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        padding: 15,
        color: colors.COLOR_LIGHT,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
        borderRadius: 16,
        position: 'relative',
        top: 25
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21.76,
        marginTop: 8,
        paddingHorizontal: 40,
        textAlign: 'center',
        marginTop: 60,
        color: '#ffffff',
    },
    Button: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        position: 'absolute',
        top: 490,
        marginBottom: 15,
    },
    btntext: {
        color: colors.COLOR_LIGHT,
        textAlign: 'center',
        fontSize: 18
    },
    editButtons: {
        color: colors.COLOR_LIGHT

    },
    editbtn: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginBottom: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 490,
    },
    cancelbtn: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        marginBottom: 10,


    },
    ButtonText: {
        color: colors.COLOR_LIGHT,
        textAlign: 'center',
        fontSize: 18

    },
    editContainer: {
        fontSize: 18,
        color: colors.COLOR_LIGHT
    },
    deletebtn: {
        backgroundColor: colors.COLOR_DARK,
        width: 327,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
        position: 'absolute',
        top: 540,
        flexDirection:'row',
        color:'red',
        alignSelf:'center'
    },
    deletebtntxt: {
        color: colors.COLOR_LIGHT,
        textAlign: 'center',
        fontSize: 18,
        color:'#DD3B3B',
        position:'relative',
        left:110
    }

});

export default YourMessages;
