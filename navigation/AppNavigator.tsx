import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAppDispatch } from '../app/base/hooks';
import { Login } from '../screens/Login';
import { RestorePassword } from '../screens/RestorePassword';
import { Register } from '../screens/Register';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    const dispatch = useAppDispatch()

    return (
        <NavigationContainer>
            <View style={[styles.main, { paddingTop: 70, paddingBottom: 30 }]}>
                <Stack.Navigator initialRouteName={"register"}
                    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }}>
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="register" component={Register} />
                    <Stack.Screen name="restore_password" component={RestorePassword} />
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