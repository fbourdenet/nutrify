import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import React from 'react'

import TabNavigation from './TabNavigation'

export type StackNavigationParamList = {
    TabNavigation: undefined,
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
        </Stack.Navigator>
    )
}

export default StackNavigation