import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import React from 'react'

import TabNavigation from './TabNavigation'
import SearchFoodScreen from '../screens/SearchFoodScreen'

export type StackNavigationParamList = {
    TabNavigation: undefined,
    SearchFoodScreen: undefined,
}

const Stack = createNativeStackNavigator<StackNavigationParamList>();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="SearchFoodScreen" component={SearchFoodScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation