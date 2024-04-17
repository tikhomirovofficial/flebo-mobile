import React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export const Root = () => {
    return (
        <>
            <StatusBar style={"light"} />
            <AppNavigator/>
        </>
    )
}
