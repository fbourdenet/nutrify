import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const Divider = () => {
  return (
    <View style={[styles.container, colors.border]}></View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    }
});

export default Divider