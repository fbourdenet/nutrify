import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'
import { IFood } from '../types/IFood'

type FoodProps = {
    food: IFood
}

const Food = ({ food }: FoodProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.foodContainer}>
                <View>
                    <Text style={[colors.secondaryText, fonts.h5, styles.foodText]} numberOfLines={1}>{food?.name}</Text>
                </View>
                <View style={styles.nutrientsContainer}>
                    {food?.energy?.value &&
                        <Text style={[colors.textColor, fonts.h6]}>{food?.energy?.value} {food?.energy?.unit}</Text>

                    }
                    {food?.energy?.value && food?.quantity &&
                        <Text style={[colors.secondarySubText, fonts.h7, styles.separatorText]}>●</Text>

                    }
                    {food?.quantity &&
                        <Text style={[colors.secondarySubText, fonts.h6]}>{food?.quantity} g</Text>
                    }
                </View>
            </View>
            <View style={styles.iconContainer}>
                <Image source={{ uri: food?.icon }} style={{ width: 40, height: 40, resizeMode: "contain" }} />
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