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
            <View style={[colors.secondaryBackground, colors.border, styles.subContainer]}>
                {subtitle &&
                    <Text style={[styles.subtitleText, colors.secondaryText, fonts.h3]}>{subtitle}</Text>
                }

                {children &&
                    <View style={styles.childrenContainer}>
                        {children}
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    subContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    subtitleText: {
        paddingVertical: 20
    }

})

export default BasicSection