import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { colors } from "../constants/colors";

import TodayScreen from "../screens/TodayScreen"
import MealScreen from "../screens/MealScreen"
import ProgressScreen from "../screens/ProgressScreen"

type TabNavigatorParamList = {
    Today: undefined,
    Progress: undefined,
    Meal: undefined,
}

const TabNavigator = createBottomTabNavigator<TabNavigatorParamList>();

function TabNavigation() {
    return (
        <TabNavigator.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopColor: "#1E1E1E",
                borderTopWidth: 2,
                backgroundColor: "#121212",
            },
        }}>
            <TabNavigator.Screen name="Today" component={TodayScreen} options={{
                tabBarActiveTintColor: "#E4E4E4",
                tabBarInactiveTintColor: "#8D8D8D",
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='home' size={26} style={focused ? colors.secondaryText : colors.secondarySubText} />
            }} />
                        <TabNavigator.Screen name="Meal" component={MealScreen} options={{
                tabBarActiveTintColor: "#E4E4E4",
                tabBarInactiveTintColor: "#8D8D8D",
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='food-apple' size={26} style={focused ? colors.secondaryText : colors.secondarySubText} />
            }} />
            <TabNavigator.Screen name="Progress" component={ProgressScreen} options={{
                tabBarActiveTintColor: "#E4E4E4",
                tabBarInactiveTintColor: "#8D8D8D",
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='chart-timeline-variant' size={26} style={focused ? colors.secondaryText : colors.secondarySubText} />
            }} />
        </TabNavigator.Navigator>
    )
}

export default TabNavigation