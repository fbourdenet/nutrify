import { View, SafeAreaView, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../constants/globalStyle'
import { colors } from '../constants/colors'
import ScreenHeader from '../components/ScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationPropList } from '../types/StackNavigationPropList'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const SearchFoodScreen = () => {
  const [food, setFood] = useState("");
  const navigation = useNavigation<StackNavigationPropList>();

  return (
    <SafeAreaView style={[globalStyle.parentContainer, colors.background]}>
      <View style={globalStyle.container}>
        <ScreenHeader title='Ajouter un aliment' leftIcon={{ name: "arrow-left", action: navigation.goBack }} rightIcon={{ name: "qrcode-scan", action: navigation.goBack }} />
        <View style={[styles.inputContainer, colors.secondaryBackground]}>
          <MaterialCommunityIcons style={colors.secondarySubText} name='magnify' size={20} />
          <TextInput
            style={[styles.input, colors.secondaryText]}
            onChangeText={(value) => setFood(value)}
            value={food}
            placeholder="Votre aliment..."
            autoCorrect={false}
            keyboardAppearance='dark'
            placeholderTextColor="#8D8D8D"
            onSubmitEditing={(e) => console.log("get")}
          />
          {food.length > 0 &&
            <TouchableWithoutFeedback onPress={() => setFood("")}>
              <MaterialCommunityIcons style={colors.secondarySubText} name='close-circle' size={20} />
            </TouchableWithoutFeedback>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    marginVertical: 20
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5,
  }
});

export default SearchFoodScreen