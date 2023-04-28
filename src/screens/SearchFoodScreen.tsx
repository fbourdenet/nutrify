import { View, SafeAreaView, ScrollView, TextInput, ActivityIndicator, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../constants/globalStyle'
import { colors } from '../constants/colors'
import ScreenHeader from '../components/ScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationPropList } from '../types/StackNavigationPropList'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BasicSection from '../components/BasicSection'
import { OpenFoodFacts } from '../types/OpenFoodFacts'
import Food from '../components/Food'
import Divider from '../components/Divider'
import { getFoodsByName } from '../api/api'


const SearchFoodScreen = () => {
    const [foods, setFoods] = useState<OpenFoodFacts[] | null>(null);
    const [food, setFood] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<StackNavigationPropList>();

    const getFoods = async (name: string) => {
        setLoading(true);

        let foods: OpenFoodFacts[] = await getFoodsByName(name);
        setFoods(foods);

        setLoading(false);
    }

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
                        onSubmitEditing={(e) => getFoods(e.nativeEvent.text)}
                    />
                    {food.length > 0 &&
                        <TouchableWithoutFeedback onPress={() => setFood("")}>
                            <MaterialCommunityIcons style={colors.secondarySubText} name='close-circle' size={20} />
                        </TouchableWithoutFeedback>
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {loading &&
                            <ActivityIndicator size="small" style={colors.secondarySubText} />
                        }
                        {foods && !loading &&
                            <BasicSection>
                                {
                                    foods.map((food, index) => {
                                        return (
                                            <React.Fragment key={food._id}>
                                                <Food
                                                    food={{
                                                        icon: food?.selected_images?.front?.small?.fr,
                                                        name: food.product_name,
                                                        energy: { unit: food.nutriments['energy-kcal_unit'], value: food.nutriments['energy-kcal_100g'] },
                                                        quantity: food?.product_quantity
                                                    }}
                                                    //meal_time={route.params.meal_time}
                                                />
                                                {foods.length - 1 !== index &&
                                                    <Divider />
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </BasicSection>
                        }
                    </View>
                </ScrollView>
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