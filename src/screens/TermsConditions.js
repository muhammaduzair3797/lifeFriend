import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constant';

const TermsConditions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      <View style={{ width: 303, height: 550, position: 'relative', top: 15 }}>
                <Text style={styles.content}>
                    {/* Add your Privacy Policy text here */}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Text>
                <Text style={styles.content}>
                    {/* Add your Privacy Policy text here */}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Text>
                <Text style={styles.content}>
                    {/* Add your Privacy Policy text here */}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Text>

            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.COLOR_PRIMARY,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        color: colors.COLOR_LIGHT
    },
    content: {
        fontSize: 16,
        lineHeight: 21.79,
        textAlign: 'center',
        color: colors.COLOR_LIGHT,
        marginBottom: 15,
    },
});

export default TermsConditions;
