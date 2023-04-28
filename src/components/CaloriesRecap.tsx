import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slider } from '@miblanchard/react-native-slider';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors';
import { Circle } from 'react-native-svg';
import Divider from './Divider';

type Props = {}

const CaloriesRecap = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <AnimatedCircularProgress
                    size={200}
                    width={20}
                    fill={80}
                    arcSweepAngle={230}
                    rotation={245}
                    lineCap='round'
                    padding={0}
                    tintColor='#6d7bfa'
                    style={{ marginTop: 30, padding: 0 }}
                    renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="#6d7bfa" strokeWidth={3} stroke="#E4E4E4" />}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#8D8D8D">
                    {
                        (fill) => (
                            <View style={styles.caloriesContainer}>
                                <Text style={[fonts.calories, colors.secondaryText]}>2118</Text>
                                <Text style={[fonts.h6, colors.secondarySubText, styles.caloriesText]}>Your total calories burnt today</Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
                <View style={styles.nutrientsContainer}>
                    <View style={styles.nutrientContainer}>
                        <Text style={[fonts.h5, colors.secondaryText]}>Protein</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={100}
                            value={20}
                            minimumTrackTintColor={"#6d7bfa"}
                            maximumTrackTintColor={"#8D8D8D"}
                            trackStyle={{ height: 8, borderRadius: 10 }}
                            thumbStyle={{ height: 0, width: 0 }}
                            containerStyle={{ marginVertical: -10 }}
                            disabled
                        />
                        <Text style={[fonts.h6, colors.secondarySubText, styles.kcalText]}>2100 g</Text>
                    </View>
                    <View style={styles.nutrientContainer}>
                        <Text style={[fonts.h5, colors.secondaryText]}>Fat</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={100}
                            value={20}
                            minimumTrackTintColor={"#6d7bfa"}
                            maximumTrackTintColor={"#8D8D8D"}
                            trackStyle={{ height: 8, borderRadius: 10 }}
                            thumbStyle={{ height: 0, width: 0 }}
                            containerStyle={{ marginVertical: -10 }}
                            disabled
                        />
                        <Text style={[fonts.h6, colors.secondarySubText, styles.kcalText]}>2100 g</Text>
                    </View>
                    <View style={styles.nutrientContainer}>
                        <Text style={[fonts.h5, colors.secondaryText]}>Carbs</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={100}
                            value={20}
                            minimumTrackTintColor={"#6d7bfa"}
                            maximumTrackTintColor={"#8D8D8D"}
                            trackStyle={{ height: 8, borderRadius: 10 }}
                            thumbStyle={{ height: 0, width: 0 }}
                            containerStyle={{ marginVertical: -10 }}
                            disabled
                        />
                        <Text style={[fonts.h6, colors.secondarySubText, styles.kcalText]}>2100 g</Text>
                    </View>
                </View>

            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.detailContainer}>
                    <Text style={[fonts.h2, colors.secondaryText, styles.kcalText]}>2100 kcal</Text>
                    <Text style={[fonts.h6, colors.secondarySubText]}>🥗 Eaten</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[fonts.h2, colors.secondaryText, styles.kcalText]}>2100 kcal</Text>
                    <Text style={[fonts.h6, colors.secondarySubText]}>🔥 Burned</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    progressContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    caloriesContainer: {
        alignItems: "center",
        marginTop: -20,
        paddingHorizontal: 25,
    },
    nutrientsContainer: {
        flex: 1,
        marginLeft: 35,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    nutrientContainer: {
        justifyContent: "space-around",
    },
    detailsContainer: {
        marginTop: -15,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 15
    },
    detailContainer: {
        alignItems: "center",
        flexDirection: "column",
        padding: 5
    },
    kcalText: {
        paddingBottom: 10
    },
    caloriesText: {
        textAlign: "center",
        marginTop: 10
    }
})

export default CaloriesRecap