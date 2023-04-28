import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import BasicSection from '../components/BasicSection'
import BasicHeader from '../components/BasicHeader'
import Divider from '../components/Divider'
import Food from '../components/Food'
import { colors } from '../constants/colors'
import { globalStyle } from '../constants/globalStyle'
import BasicButton from '../components/BasicButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationPropList } from '../types/StackNavigationPropList'

type Props = {}

const MealScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationPropList>();

  return (
    <SafeAreaView style={[globalStyle.parentContainer, colors.background]}>
      <ScrollView>
        <View style={globalStyle.container}>
          <BasicHeader title="Meals" icon={{ name: "calendar-month" }} />
          <BasicSection subtitle='☕ Breakfast'>
            <Food food={{
              name: "dd",
              icon: "",
              quantity: 400,
              energy: {
                unit: "kcal",
                value: 500
              }
            }} />
            <Divider />
            <Food food={{
              name: "dd",
              icon: "",
              quantity: 400,
              energy: {
                unit: "kcal",
                value: 500
              }
            }} />
            <Divider />
            <Food food={{
              name: "dd",
              icon: "",
              quantity: 400,
              energy: {
                unit: "kcal",
                value: 500
              }
            }} />
            <BasicButton title='Ajouter un aliment' action={() => navigation.navigate("SearchFoodScreen")} />
          </BasicSection>
          <BasicSection subtitle='🍴 Meal'>
            <BasicButton title='Ajouter un aliment' action={() => navigation.navigate("SearchFoodScreen")} />
          </BasicSection>
          <BasicSection subtitle='🥗 Diner'>
            <BasicButton title='Ajouter un aliment' action={() => navigation.navigate("SearchFoodScreen")} />
          </BasicSection>
          <BasicSection subtitle='🍎 Snack'>
            <BasicButton title='Ajouter un aliment' action={() => navigation.navigate("SearchFoodScreen")} />
          </BasicSection>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MealScreen