import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'


const BackButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={require('../assets/images/back.png')} style={{width:20,height:25}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default BackButton;