import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors'
import { HeaderIcon } from '../types/HeaderIcon'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


type ScreenHeaderProps = {
    title?: string,
    leftIcon: HeaderIcon,
    rightIcon?: HeaderIcon
}

const ScreenHeader = ({ title, leftIcon, rightIcon }: ScreenHeaderProps) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={[styles.leftIcon, colors.textColor]} name={leftIcon?.name} size={26} onPress={() => leftIcon?.action && leftIcon.action()} />
            <Text numberOfLines={1} style={[fonts.h4, colors.secondaryText, styles.middleText]}>{title}</Text>
            <MaterialCommunityIcons style={[styles.rightIcon, colors.textColor]} name={rightIcon?.name} size={26}  onPress={() => rightIcon?.action && rightIcon.action()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    middleText: {
        paddingRight: 70,
        paddingLeft: 70,
    },
    leftIcon: {
        position: "absolute",
        left: 0,
        top: -5,
        zIndex: 1
    },
    rightIcon: {
        position: "absolute",
        right:0,
        top: -5,
        zIndex: 1
    },
});

export default ScreenHeader