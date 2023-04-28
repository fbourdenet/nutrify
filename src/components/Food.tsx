import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

type Props = {}

const Food = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.foodContainer}>
                <View>
                    <Text style={[colors.secondaryText, fonts.h5, styles.foodText]} numberOfLines={2}>Eau de source - Cristaline</Text>
                </View>
                <View style={styles.nutrientsContainer}>
                    <Text style={[colors.textColor, fonts.h6]}>130 kcal</Text>
                    <Text style={[colors.secondarySubText, fonts.h7, styles.separatorText]}>●</Text>
                    <Text style={[colors.secondarySubText, fonts.h6]}>50g</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Image source={{uri: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_fr.433.400.jpg"}} style={{width: 40, height: 40, resizeMode: "contain"}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
    },
    nutrientsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    foodContainer: {
        flex: 1,
        paddingRight: 15
    },
    iconContainer: {
        width: 40, 
        height: 40,
        flexShrink: 0,
        backgroundColor: "white",
        borderRadius: 5,
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