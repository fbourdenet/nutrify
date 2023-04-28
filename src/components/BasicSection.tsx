import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

import Divider from './Divider'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

type BasicSectionProps = {
    title?: string,
    subtitle?: string,
    children?: ReactNode
}

const BasicSection = ({ title, subtitle, children }: BasicSectionProps) => {
    return (
        <View style={styles.container}>
            {title &&
                <Text style={[styles.titleText, colors.secondaryText, fonts.h3]}>{title}</Text>
            }
            <View style={[styles.subContainer, colors.secondaryBackground, colors.border]}>
                {subtitle &&
                    <Text style={[styles.subtitleText, colors.secondaryText, fonts.h3]}>{subtitle}</Text>
                }
                <View style={styles.childrenContainer}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    subContainer: {
        borderRadius: 10,
        padding: 15
    },
    titleText: {
        paddingBottom: 10
    },
    subtitleText: {
        borderRadius: 10,
    },
    childrenContainer: {
        borderRadius: 10,
    },
})

export default BasicSection