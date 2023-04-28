import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import BasicSection from '../components/BasicSection'
import BasicHeader from '../components/BasicHeader'
import Divider from '../components/Divider'
import Food from '../components/Food'
import { colors } from '../constants/colors'
import { globalStyle } from '../constants/globalStyle'

type Props = {}

const MealScreen = (props: Props) => {
  return (
    <SafeAreaView style={[globalStyle.parentContainer, colors.background]}>
      <ScrollView>
        <View style={globalStyle.container}>
          <BasicHeader title="Meals" subtitle='Customize your meals!' />
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

export default MealScreen