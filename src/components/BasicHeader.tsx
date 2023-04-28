import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { fonts } from '../constants/fonts'
import { HeaderIcon } from '../types/HeaderIcon'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/colors';

type BasicHeaderProps = {
    title: string,
    subtitle?: string,
    icon?: HeaderIcon,
}

const BasicHeader = ({ title, subtitle, icon }: BasicHeaderProps) => {
    return (
        <View style={styles.container}>
            <View>
                {title && !subtitle &&
                    <Text style={[styles.helloText, fonts.h1, colors.secondaryText]}>{title}</Text>
                }
                {title && subtitle &&
                    <>
                        <Text style={[fonts.h1, colors.secondaryText]}>{title}</Text>
                        <Text style={[styles.helloText, fonts.h4, colors.secondarySubText]}>{subtitle}</Text>
                    </>
                }
            </View>
            {icon &&
                <MaterialCommunityIcons name={icon.name} size={26} style={colors.secondaryText} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 30,
    },
    helloText: {
        paddingTop: 4
    }
});

export default BasicHeader