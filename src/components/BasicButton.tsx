import { View, TouchableOpacity, Text,StyleSheet } from 'react-native'
import React from 'react'
import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors'

type BasicButtonProps = {
    title: string
    action?: Function
}

const BasicButton = ({title, action}: BasicButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, colors.colorBackground]} onPress={() => action && action() }>
        <Text style={[styles.containerText, fonts.h4, colors.secondaryText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        marginTop: 5
    },
    containerText: {
        textAlign: "center"
    }
});

export default BasicButton