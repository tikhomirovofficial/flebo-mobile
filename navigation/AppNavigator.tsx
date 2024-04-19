import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAppDispatch, useAppSelector } from '../app/base/hooks';
import { Login } from '../screens/Login';
import { RestorePassword } from '../screens/RestorePassword';
import { Register } from '../screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavProps } from '../types/common.types';
import AppTab from './AppTabs';
import { Hub } from '../screens/Hub';
import { Main } from '../screens/Main';
import { Services } from '../screens/Services';
import { Documents } from '../screens/Documents';
import { Doctors } from '../screens/Doctors';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <Tab.Navigator
                initialRouteName={"main"}
                tabBar={(props) => <AppTab key={props.state.index} {...props} />}
                sceneContainerStyle={[styles.main, { backgroundColor: "white" }]}
                screenOptions={{ headerShown: false, unmountOnBlur: true }}>
                <Tab.Screen name="main" component={Main} />
                <Tab.Screen name="doctors" component={Doctors} />
                <Tab.Screen name="support" component={Hub} />
                <Tab.Screen name="services" component={Services} />
                <Tab.Screen name="profile" component={Hub} />
            </Tab.Navigator>
        </>
    );
}


const AppNavigator = () => {
    const dispatch = useAppDispatch()

    return (
        <NavigationContainer>
            <View style={[styles.main]}>
                <Stack.Navigator initialRouteName={"doctors"}
                    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }}>
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="register" component={Register} />
                    <Stack.Screen name="restore_password" component={RestorePassword} />
                    <Stack.Screen name="documents" component={Documents} />
                    <Stack.Screen name="home" component={MainTabs} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        gap: 16,

    },
    mainScroll: {
        flex: 1,
    }
})
export const fs = StyleSheet.create({
    montR: {
        fontFamily: "MontserratRegular"
    }
})
export default AppNavigator;