import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constant';

const EditNameBtn = ({navigation}) => {
    const handleEditName = () => {
        navigation.navigate('NameScreen');
      };

  return (

    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button} onPress={handleEditName}> 
        <Text style={styles.text}>
            Edit Name
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:40,
        marginBottom:15,

    },
    Button: {
        width:327,
        backgroundColor:colors.COLOR_LIGHT,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 16,
        opacity:0.25
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color:colors.COLOR_LIGHT,
        opacity:1,

    }
})

export default EditNameBtn