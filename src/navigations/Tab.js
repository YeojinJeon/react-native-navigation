import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Mail, Meet, Settings } from "../screens/TabScreens";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Mail">
            <Tab.Screen name="Mail" component={Mail}
                options={{ tabBarLabel: 'Inbox', tabBarIcon: props => TabIcon({ ...props, name: 'email' }) }} />
            <Tab.Screen name="Meet" component={Meet}
                options={{ tabBarIcon: props => TabIcon({ ...props, name: 'video' }) }} />
            <Tab.Screen name="Settings" component={Settings}
                options={{ tabBarIcon: props => TabIcon({ ...props, name: 'settings' }) }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;

