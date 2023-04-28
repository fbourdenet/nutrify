import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

type Props = {}

const Food = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.sisiContainer}>
                <View>
                    <Text style={[colors.secondaryText, fonts.h4, styles.foodText]} numberOfLines={2}>Eau de source - Cristaline</Text>
                </View>
                <View style={styles.nutrientsContainer}>
                    <Text style={[colors.secondarySubText, fonts.h5]}>130 kcal</Text>
                    <Text style={[colors.secondarySubText, fonts.h6, styles.separatorText]}>●</Text>
                    <Text style={[colors.secondarySubText, fonts.h5]}>50g</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Text>🍎</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    nutrientsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    sisiContainer: {
        flex: 1,
        paddingRight: 15
    },
    iconContainer: {
        flexShrink: 0
    },
    foodText: {
        paddingBottom: 5
    },
    separatorText: {
        paddingLeft: 5,
        paddingRight: 5
    }
})

export default Food