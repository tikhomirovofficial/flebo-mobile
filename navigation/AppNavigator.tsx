import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { handleOrderInfoModal } from '../app/features/modals/modalsSlice';
import { useAppDispatch } from '../app/base/hooks';
import { Login } from '../screens/Login';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    const dispatch = useAppDispatch()

    return (
        <NavigationContainer>
            <View style={[styles.main, { backgroundColor: "blue", paddingTop: 80, paddingBottom: 30}]}>
                <Stack.Navigator initialRouteName={"login"}
                    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "blue" } }}>
                    <Stack.Screen name="login_phone" component={Login} />
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