import { View, Text } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';



type Props = {}

const CaloriesRecap = (props: Props) => {
    return (
        <View>
            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={100}
                arcSweepAngle={230}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
        </View>
    )
}

export default CaloriesRecap