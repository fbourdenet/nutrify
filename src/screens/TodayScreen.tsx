import { SafeAreaView, View, ScrollView } from 'react-native'
import React from 'react'
import { globalStyle } from '../constants/globalStyle'
import BasicHeader from '../components/BasicHeader'
import BasicSection from '../components/BasicSection'
import Divider from '../components/Divider'
import Food from '../components/Food'
import { colors } from '../constants/colors'

type Props = {}

const Home = (props: Props) => {
    return (
        <SafeAreaView style={[globalStyle.parentContainer, colors.background]}>
            <ScrollView>
                <View style={globalStyle.container}>
                    <BasicHeader title="Today, Mar 21" subtitle='Hello, Florian !' icon={{ name: "calendar-month" }} />
                    <BasicSection title='Breakfast'>
                        <Food />
                        <Divider />
                        <Food />
                        <Divider />
                        <Food />
                    </BasicSection>
                    <BasicSection title='Meal'>
                        <Food />
                        <Divider />
                        <Food />
                        <Divider />
                        <Food />
                    </BasicSection>
                    <BasicSection title='Diner'>
                        <Food />
                        <Divider />
                        <Food />
                        <Divider />
                        <Food />
                    </BasicSection>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home