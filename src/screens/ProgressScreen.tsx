import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BasicHeader from '../components/BasicHeader'
import BasicSection from '../components/BasicSection'
import Divider from '../components/Divider'
import Food from '../components/Food'
import { colors } from '../constants/colors'
import { globalStyle } from '../constants/globalStyle'

type Props = {}

const Progress = (props: Props) => {
  return (
    <SafeAreaView style={[globalStyle.parentContainer, colors.background]}>
      <ScrollView>
        <View style={globalStyle.container}>
          <BasicHeader title="Progress" subtitle='Track your achievements!' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Progress